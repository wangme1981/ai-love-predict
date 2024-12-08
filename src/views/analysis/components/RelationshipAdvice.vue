<script setup lang="ts">
import { ElCard, ElTimeline, ElTimelineItem } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'

const props = defineProps<AnalysisProps>()

// 建议类型对应的图标
const suggestionIcons = {
  development: 'Promotion',
  communication: 'ChatDotRound',
  activity: 'Service'
}
</script>

<template>
  <el-card class="relationship-advice">
    <template #header>
      <div class="card-header">
        <h2>关系发展建议</h2>
      </div>
    </template>

    <!-- 关系发展建议 -->
    <div class="suggestions-section">
      <h3>发展建议</h3>
      <el-timeline>
        <el-timeline-item
          v-for="(suggestion, index) in result.relationshipAdvice.suggestions"
          :key="index"
          type="primary"
          :icon="suggestionIcons.development"
          size="large"
        >
          <p class="suggestion-text">{{ suggestion }}</p>
        </el-timeline-item>
      </el-timeline>
    </div>

    <!-- 沟通技巧 -->
    <div class="communication-section">
      <h3>沟通技巧</h3>
      <el-timeline>
        <el-timeline-item
          v-for="(tip, index) in result.relationshipAdvice.communicationTips"
          :key="index"
          type="success"
          :icon="suggestionIcons.communication"
          size="large"
        >
          <p class="tip-text">{{ tip }}</p>
        </el-timeline-item>
      </el-timeline>
    </div>

    <!-- 发展指导 -->
    <div class="guide-section">
      <h3>长期发展指导</h3>
      <el-timeline>
        <el-timeline-item
          v-for="(guide, index) in result.relationshipAdvice.developmentGuide"
          :key="index"
          type="warning"
          :icon="suggestionIcons.activity"
          size="large"
        >
          <p class="guide-text">{{ guide }}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<style scoped>
.relationship-advice {
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
  margin: 20px 0;
  padding-left: 10px;
  border-left: 4px solid var(--el-color-primary);
}

.suggestion-text,
.tip-text,
.guide-text {
  color: var(--el-text-color-regular);
  line-height: 1.6;
  margin: 0;
  padding: 8px 0;
}

:deep(.el-timeline-item__node) {
  background-color: var(--el-color-primary-light-5);
}

:deep(.el-timeline-item__wrapper) {
  padding-left: 20px;
}

:deep(.el-timeline-item__content) {
  background: var(--el-bg-color-page);
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}

@media (max-width: 768px) {
  :deep(.el-timeline-item__wrapper) {
    padding-left: 10px;
  }
}
</style> 