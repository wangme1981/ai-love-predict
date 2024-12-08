<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { TestResult } from './types/analysis'

// 导入子组件
import ResultOverview from './components/ResultOverview.vue'
import PersonalityAnalysis from './components/PersonalityAnalysis.vue'
import ValueMatch from './components/ValueMatch.vue'
import LifestyleMatch from './components/LifestyleMatch.vue'
import RelationshipAdvice from './components/RelationshipAdvice.vue'
import PotentialIssues from './components/PotentialIssues.vue'
import ImprovementSuggestions from './components/ImprovementSuggestions.vue'

const route = useRoute()
const loading = ref(true)
const result = ref<TestResult>({
  // 测试数据
  overallScore: 85,
  scores: {
    personality: 88,
    values: 82,
    lifestyle: 85
  },
  personalityAnalysis: {
    traits: ['开朗外向', '善解人意', '责任心强', '创造力强'],
    compatibility: '性格高度兼容',
    conflicts: ['压力处理方式不同', '决策风格差异']
  },
  valueAnalysis: {
    coreValues: ['家庭观念', '事业进取', '生活品质', '精神追求'],
    compatibility: '价值观基本一致，对未来发展有共同愿景',
    differences: ['消费观念差异', '生活重心偏差']
  },
  lifestyleAnalysis: {
    routineMatch: 75,
    interests: ['旅行', '美食', '运动', '阅读'],
    socialOverlap: 80
  },
  relationshipAdvice: {
    suggestions: [
      '建立共同的生活目标',
      '保持良好的沟通习惯',
      '互相尊重对方的个人空间'
    ],
    communicationTips: [
      '选择合适的沟通时机',
      '使用积极的语言表达',
      '学会倾听对方的想法'
    ],
    developmentGuide: [
      '定期进行感情回顾和展望',
      '共同参与兴趣活动',
      '建立健康的财务规划'
    ]
  },
  potentialIssues: {
    severity: 'low',
    issues: [
      '工作与生活平衡',
      '家庭责任分配',
      '个人发展空间'
    ],
    preventions: [
      '提前制定时间管理计划',
      '明确双方的责任和期望',
      '保持个人兴趣和社交圈'
    ]
  },
  improvements: {
    plans: [
      '每周安排固定的约会时间',
      '共同参与一项新的兴趣活动',
      '制定共同的储蓄计划'
    ],
    actions: [
      '建立日常生活分工表',
      '开展定期的感情交流会',
      '互相分享工作和生活的收获'
    ],
    longTermGoals: [
      '在三年内实现共同创业',
      '规划适合双方的家庭生活',
      '培养共同的兴趣爱好'
    ]
  }
})

// 模拟获取测试结果数据
const fetchTestResult = async () => {
  try {
    loading.value = true
    // 实际项目中这里会调用API
    await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟加载延迟
  } catch (error) {
    console.error('获取测试结果失败:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchTestResult()
})
</script>

<template>
  <div class="analysis-page">
    <div class="container">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <el-skeleton :rows="10" animated />
      </div>
      
      <!-- 分析结果内容 -->
      <template v-else>
        <!-- 结果总览 -->
        <ResultOverview :result="result" />
        
        <!-- 性格分析 -->
        <PersonalityAnalysis :result="result" />
        
        <!-- 价值观匹配 -->
        <ValueMatch :result="result" />
        
        <!-- 生活方式匹配 -->
        <LifestyleMatch :result="result" />
        
        <!-- 关系建议 -->
        <RelationshipAdvice :result="result" />
        
        <!-- 潜在问题 -->
        <PotentialIssues :result="result" />
        
        <!-- 改善建议 -->
        <ImprovementSuggestions :result="result" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.analysis-page {
  min-height: 100vh;
  background: var(--el-bg-color-page);
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.loading-container {
  padding: 40px;
  background: var(--el-bg-color-overlay);
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}

:deep(.el-skeleton) {
  padding: 20px;
}
</style>