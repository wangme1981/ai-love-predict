<script setup lang="ts">
import { computed } from 'vue'
import { ElCard, ElProgress, ElDivider } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'

const props = defineProps<AnalysisProps>()

// 计算作息匹配度的颜色
const routineMatchColor = computed(() => {
  const score = props.result.lifestyleAnalysis.routineMatch
  if (score >= 80) return '#67C23A'
  if (score >= 60) return '#409EFF'
  if (score >= 40) return '#E6A23C'
  return '#F56C6C'
})

// 计算社交圈重合度的颜色
const socialOverlapColor = computed(() => {
  const score = props.result.lifestyleAnalysis.socialOverlap
  if (score >= 80) return '#67C23A'
  if (score >= 60) return '#409EFF'
  if (score >= 40) return '#E6A23C'
  return '#F56C6C'
})
</script>

<template>
  <el-card class="lifestyle-match">
    <template #header>
      <div class="card-header">
        <h2>生活方式匹配分析</h2>
      </div>
    </template>

    <!-- 作息匹配度 -->
    <div class="routine-match">
      <h3>作息规律匹配度</h3>
      <div class="progress-section">
        <el-progress
          type="circle"
          :percentage="result.lifestyleAnalysis.routineMatch"
          :color="routineMatchColor"
          :width="120"
        />
      </div>
    </div>

    <el-divider />

    <!-- 共同兴趣 -->
    <div class="interests">
      <h3>共同兴趣爱好</h3>
      <div class="interests-list">
        <el-tag
          v-for="(interest, index) in result.lifestyleAnalysis.interests"
          :key="index"
          class="interest-tag"
          effect="plain"
        >
          {{ interest }}
        </el-tag>
      </div>
    </div>

    <el-divider />

    <!-- 社交圈重合度 -->
    <div class="social-overlap">
      <h3>社交圈重合度</h3>
      <div class="progress-section">
        <el-progress
          type="circle"
          :percentage="result.lifestyleAnalysis.socialOverlap"
          :color="socialOverlapColor"
          :width="120"
        />
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.lifestyle-match {
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
  text-align: center;
}

.progress-section {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 20px;
}

.interest-tag {
  padding: 8px 16px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .interests-list {
    padding: 10px;
  }
}
</style> 