<script setup lang="ts">
import { computed } from 'vue'
import { ElCard, ElDivider } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'

const props = defineProps<AnalysisProps>()

// 计算兼容性评级
const compatibilityRating = computed(() => {
  const compatibility = props.result.personalityAnalysis.compatibility
  return {
    text: compatibility,
    type: compatibility.includes('高') ? 'success' : 
          compatibility.includes('中') ? 'warning' : 'danger'
  }
})
</script>

<template>
  <el-card class="personality-analysis">
    <template #header>
      <div class="card-header">
        <h2>性格特征分析</h2>
      </div>
    </template>

    <!-- 性格特征列表 -->
    <div class="traits-section">
      <h3>主要性格特征</h3>
      <div class="traits-list">
        <div 
          v-for="(trait, index) in result.personalityAnalysis.traits"
          :key="index"
          class="trait-item"
        >
          <div class="trait-icon">
            <el-icon><User /></el-icon>
          </div>
          <div class="trait-content">
            <h4>{{ trait }}</h4>
          </div>
        </div>
      </div>
    </div>

    <el-divider />

    <!-- 兼容性分析 -->
    <div class="compatibility-section">
      <h3>兼容性分析</h3>
      <div class="compatibility-content">
        <el-tag 
          :type="compatibilityRating.type"
          effect="dark"
          class="compatibility-tag"
        >
          {{ compatibilityRating.text }}
        </el-tag>
        <p class="compatibility-desc">
          {{ result.personalityAnalysis.compatibility }}
        </p>
      </div>
    </div>

    <el-divider />

    <!-- 潜在冲突点 -->
    <div class="conflicts-section">
      <h3>需要注意的方面</h3>
      <div class="conflicts-list">
        <div 
          v-for="(conflict, index) in result.personalityAnalysis.conflicts"
          :key="index"
          class="conflict-item"
        >
          <el-icon color="#F56C6C"><Warning /></el-icon>
          <span>{{ conflict }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.personality-analysis {
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

.traits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.trait-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background: var(--el-bg-color-page);
  border-radius: 8px;
  transition: transform 0.3s;
}

.trait-item:hover {
  transform: translateY(-2px);
}

.trait-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.trait-content h4 {
  margin: 0;
  font-size: 14px;
}

.compatibility-content {
  text-align: center;
  padding: 20px 0;
}

.compatibility-tag {
  font-size: 16px;
  padding: 8px 20px;
  margin-bottom: 15px;
}

.compatibility-desc {
  color: var(--el-text-color-regular);
  line-height: 1.6;
}

.conflicts-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.conflict-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: var(--el-color-danger-light-9);
  border-radius: 4px;
}

.conflict-item span {
  color: var(--el-text-color-regular);
}

@media (max-width: 768px) {
  .traits-list {
    grid-template-columns: 1fr;
  }
}
</style> 