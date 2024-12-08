<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton, ElSteps, ElStep, ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const active = ref(0)

// 基础信息表单
const basicForm = reactive({
  name: '',
  age: '',
  gender: '',
  email: ''
})

// 表单验证规则
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
    { pattern: /^[0-9]{1,2}$/, message: '请输入有效年龄', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'change' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
})

// 处理表单提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      console.log('提交表单:', basicForm)
      // 模拟提交后获取测试ID
      const testId = '1' // 实际项目中这个ID应该从后端获取
      // 跳转到分析页面
      router.push(`/analysis/${testId}`)
    }
  })
}
</script>

<template>
  <div class="quick-test">
    <h2>快速测试</h2>
    <div class="test-container">
      <el-form
        ref="formRef"
        :model="basicForm"
        :rules="rules"
        label-width="80px"
        class="test-form"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="basicForm.name" placeholder="请输入姓名" />
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model="basicForm.age" placeholder="请输入年龄" />
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-select v-model="basicForm.gender" placeholder="请选择性别">
            <el-option label="男" value="male" />
            <el-option label="女" value="female" />
          </el-select>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="basicForm.email" placeholder="请输入邮箱" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">
            开始测试
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.quick-test {
  padding: 40px 0;
}

.test-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.test-form {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .test-container {
    margin: 0 20px;
  }
}
</style>