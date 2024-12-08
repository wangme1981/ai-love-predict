<script setup lang="ts">
import { ElCard, ElSteps, ElStep } from 'element-plus'
import type { AnalysisProps } from '../types/analysis'

const props = defineProps<AnalysisProps>()
</script>

<template>
  <el-card class="improvement-suggestions">
    <template #header>
      <div class="card-header">
        <h2>改善建议</h2>
      </div>
    </template>

    <!-- 行动计划 -->
    <div class="action-plans">
      <h3>具体行动计划</h3>
      <el-steps direction="vertical" :active="1">
        <el-step
          v-for="(plan, index) in result.improvements.plans"
          :key="index"
          :title="`计划 ${index + 1}`"
          :description="plan"
        />
      </el-steps>
    </div>

    <!-- 具体行动 -->
    <div class="actions-section">
      <h3>建议采取的行动</h3>
      <div class="action-cards">
        <div
          v-for="(action, index) in result.improvements.actions"
          :key="index"
          class="action-card"
        >
          <div class="action-icon">
            <el-icon><Star /></el-icon>
          </div>
          <div class="action-content">
            <h4>行动建议 {{ index + 1 }}</h4>
            <p>{{ action }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 长期目标 -->
    <div class="goals-section">
      <h3>长期发展目标</h3>
      <div class="goals-timeline">
        <div
          v-for="(goal, index) in result.improvements.longTermGoals"
          :key="index"
          class="goal-item"
        >
          <div class="goal-marker">
            <div class="goal-number">{{ index + 1 }}</div>
          </div>
          <div class="goal-content">
            <p>{{ goal }}</p>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.improvement-suggestions {
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
  margin: 30px 0 20px;
  text-align: center;
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.action-card {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: var(--el-bg-color-page);
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
  transition: transform 0.3s;
}

.action-card:hover {
  transform: translateY(-2px);
}

.action-icon {
  width: 40px;
  height: 40px;
  background: var(--el-color-primary-light-9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--el-color-primary);
}

.action-content {
  flex: 1;
}

.action-content h4 {
  margin: 0 0 10px;
  font-size: 15px;
  color: var(--el-text-color-primary);
}

.action-content p {
  margin: 0;
  color: var(--el-text-color-regular);
  line-height: 1.6;
}

.goals-timeline {
  padding: 20px 0;
}

.goal-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.goal-marker {
  flex-shrink: 0;
  width: 40px;
  margin-right: 20px;
}

.goal-number {
  width: 32px;
  height: 32px;
  background: var(--el-color-success-light-9);
  color: var(--el-color-success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.goal-content {
  flex: 1;
  padding: 15px;
  background: var(--el-bg-color-page);
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}

.goal-content p {
  margin: 0;
  color: var(--el-text-color-regular);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .action-cards {
    grid-template-columns: 1fr;
  }

  .goal-marker {
    width: 30px;
    margin-right: 15px;
  }

  .goal-number {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
</style> 