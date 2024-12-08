<script setup lang="ts">
import { computed } from 'vue'
import { ElCard, ElDivider } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'

const props = defineProps<AnalysisProps>()

// 计算共同价值观标签的类型
const getValueTagType = (index: number) => {
  const types = ['success', 'info', 'warning', 'danger']
  return types[index % types.length]
}
</script>

<template>
  <el-card class="value-match">
    <template #header>
      <div class="card-header">
        <h2>价值观匹配分析</h2>
      </div>
    </template>

    <!-- 核心价值观 -->
    <div class="core-values">
      <h3>共同的核心价值观</h3>
      <div class="values-list">
        <el-tag
          v-for="(value, index) in result.valueAnalysis.coreValues"
          :key="index"
          :type="getValueTagType(index)"
          class="value-tag"
          effect="light"
        >
          {{ value }}
        </el-tag>
      </div>
    </div>

    <el-divider />

    <!-- 价值观契合度 -->
    <div class="compatibility">
      <h3>价值观契合度评估</h3>
      <div class="compatibility-content">
        <p class="compatibility-text">
          {{ result.valueAnalysis.compatibility }}
        </p>
      </div>
    </div>

    <el-divider />

    <!-- 价值观差异 -->
    <div class="differences">
      <h3>需要沟通的价值观差异</h3>
      <div class="differences-list">
        <el-alert
          v-for="(diff, index) in result.valueAnalysis.differences"
          :key="index"
          :title="diff"
          type="warning"
          :closable="false"
          class="difference-item"
        >
          <template #default>
            <p class="difference-desc">建议通过开放和诚恳的沟通来增进理解</p>
          </template>
        </el-alert>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.value-match {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 16px;
  color: var(--el-text-color-primary);
  margin-bottom: 20px;
}

.values-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.value-tag {
  padding: 8px 16px;
  font-size: 14px;
}

.compatibility-content {
  padding: 20px;
  background: var(--el-color-primary-light-9);
  border-radius: 8px;
  margin-bottom: 20px;
}

.compatibility-text {
  color: var(--el-text-color-primary);
  line-height: 1.6;
  text-align: center;
  font-size: 15px;
}

.differences-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.difference-item {
  margin-bottom: 10px;
}

.difference-desc {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin-top: 5px;
}

@media (max-width: 768px) {
  .values-list {
    justify-content: center;
  }
  
  .compatibility-content {
    padding: 15px;
  }
}
</style> 