<script setup lang="ts">
import { computed } from 'vue'
import { ElProgress, ElCard, ElTag } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'
import { MatchLevel } from '../types/analysis'

const props = defineProps<AnalysisProps>()

// 计算匹配等级
const matchLevel = computed(() => {
  const score = props.result.overallScore
  if (score >= 90) return MatchLevel.Excellent
  if (score >= 75) return MatchLevel.Good
  if (score >= 60) return MatchLevel.Fair
  return MatchLevel.Poor
})

// 匹配等级对应的样式
const levelStyle = computed(() => {
  const levelMap = {
    [MatchLevel.Excellent]: {
      color: '#67C23A',
      label: '极佳'
    },
    [MatchLevel.Good]: {
      color: '#409EFF',
      label: '良好'
    },
    [MatchLevel.Fair]: {
      color: '#E6A23C',
      label: '一般'
    },
    [MatchLevel.Poor]: {
      color: '#F56C6C',
      label: '较差'
    }
  }
  return levelMap[matchLevel.value]
})
</script>

<template>
  <el-card class="result-overview">
    <template #header>
      <div class="card-header">
        <h2>测试结果总览</h2>
      </div>
    </template>

    <!-- 总体匹配度 -->
    <div class="overall-score">
      <el-progress
        type="dashboard"
        :percentage="result.overallScore"
        :color="levelStyle.color"
        :width="180"
      >
        <template #default="{ percentage }">
          <div class="progress-content">
            <span class="percentage">{{ percentage }}%</span>
            <span class="label">匹配度</span>
          </div>
        </template>
      </el-progress>
      <el-tag :type="matchLevel" effect="dark" class="match-level">
        {{ levelStyle.label }}
      </el-tag>
    </div>

    <!-- 维度得分 -->
    <div class="dimension-scores">
      <div class="score-item">
        <span class="label">性格契合</span>
        <el-progress 
          :percentage="result.scores.personality"
          :color="levelStyle.color"
        />
      </div>
      <div class="score-item">
        <span class="label">价值观契合</span>
        <el-progress 
          :percentage="result.scores.values"
          :color="levelStyle.color"
        />
      </div>
      <div class="score-item">
        <span class="label">生活方式契合</span>
        <el-progress 
          :percentage="result.scores.lifestyle"
          :color="levelStyle.color"
        />
      </div>
    </div>

    <!-- 核心匹配点 -->
    <div class="key-points">
      <h3>核心匹配点</h3>
      <div class="points-list">
        <el-tag 
          v-for="(trait, index) in result.personalityAnalysis.traits"
          :key="index"
          class="point-tag"
          :type="index % 2 ? 'success' : 'info'"
        >
          {{ trait }}
        </el-tag>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.result-overview {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overall-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.progress-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.percentage {
  font-size: 28px;
  font-weight: bold;
}

.label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
}

.match-level {
  margin-top: 10px;
  font-size: 16px;
}

.dimension-scores {
  margin: 30px 0;
}

.score-item {
  margin: 15px 0;
}

.score-item .label {
  display: inline-block;
  width: 100px;
  margin-right: 10px;
}

.key-points {
  margin-top: 20px;
}

.key-points h3 {
  margin-bottom: 15px;
  font-size: 16px;
  color: var(--el-text-color-primary);
}

.points-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.point-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .score-item .label {
    display: block;
    width: auto;
    margin-bottom: 5px;
  }
}
</style> 