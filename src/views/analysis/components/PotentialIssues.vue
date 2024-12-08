<script setup lang="ts">
import { computed } from 'vue'
import { ElCard, ElCollapse, ElCollapseItem } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'

const props = defineProps<AnalysisProps>()

// 计算严重程度对应的样式
const severityStyle = computed(() => {
  const severityMap = {
    low: {
      color: '#67C23A',
      label: '轻微'
    },
    medium: {
      color: '#E6A23C',
      label: '中等'
    },
    high: {
      color: '#F56C6C',
      label: '严重'
    }
  }
  return severityMap[props.result.potentialIssues.severity]
})
</script>

<template>
  <el-card class="potential-issues">
    <template #header>
      <div class="card-header">
        <h2>潜在问题分析</h2>
        <el-tag
          :type="props.result.potentialIssues.severity"
          effect="dark"
          class="severity-tag"
        >
          {{ severityStyle.label }}
        </el-tag>
      </div>
    </template>

    <!-- 问题列表 -->
    <div class="issues-section">
      <h3>需要关注的问题</h3>
      <el-collapse>
        <el-collapse-item
          v-for="(issue, index) in result.potentialIssues.issues"
          :key="index"
          :title="issue"
        >
          <div class="prevention-content">
            <p class="prevention-text">
              {{ result.potentialIssues.preventions[index] }}
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- 预防建议 -->
    <div class="preventions-section">
      <h3>预防措施</h3>
      <div class="prevention-cards">
        <div
          v-for="(prevention, index) in result.potentialIssues.preventions"
          :key="index"
          class="prevention-card"
        >
          <div class="prevention-number">{{ index + 1 }}</div>
          <p class="prevention-text">{{ prevention }}</p>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.potential-issues {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.severity-tag {
  font-size: 14px;
}

h3 {
  font-size: 16px;
  color: var(--el-text-color-primary);
  margin: 20px 0;
}

.prevention-content {
  padding: 10px;
  background: var(--el-bg-color-page);
  border-radius: 4px;
}

.prevention-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.prevention-card {
  position: relative;
  padding: 20px;
  background: var(--el-bg-color-page);
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}

.prevention-number {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 24px;
  height: 24px;
  background: var(--el-color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.prevention-text {
  color: var(--el-text-color-regular);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .prevention-cards {
    grid-template-columns: 1fr;
  }
}
</style> 