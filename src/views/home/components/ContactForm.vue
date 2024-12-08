<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const rules: FormRules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  message: [{ required: true, message: '请输入留言内容', trigger: 'blur' }]
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      console.log('提交表单:', form)
      // TODO: 实现表单提交逻辑
    }
  })
}
</script>

<template>
  <div class="contact-form">
    <h2>联系我们</h2>
    <p class="subtitle">有任何问题或建议,欢迎随时联系我们</p>
    
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="form-content"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      
      <el-form-item label="留言" prop="message">
        <el-input
          v-model="form.message"
          type="textarea"
          :rows="4"
        />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.contact-form {
  padding: 60px 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.form-content {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 40px 0;
  }
}
</style>