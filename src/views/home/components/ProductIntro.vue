<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'

const features = ref([
  {
    title: '科学分析',
    desc: '基于心理学理论的多维度数据模型',
    detail: '运用先进AI算法,从性格特征、价值观、生活方式等多个维度进行深度分析'
  },
  {
    title: '智能匹配',
    desc: 'AI深度学习算法,精准匹配契合伴侣',
    detail: '持续优化的匹配模型,为您找到真正合适的人'
  },
  {
    title: '专业指导',
    desc: '个性化情感建议和关系维护指导',
    detail: '智能情感顾问24小时在线,为您的感情保驾护航'
  }
])
</script>

<template>
  <div class="product-intro">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="title">AI智能情感分析</h1>
        <p class="subtitle">遇见对的人,让爱更有方向</p>
        <p class="description">
          基于先进AI技术,深入分析您的情感需求,帮助您找到真正契合的伴侣
        </p>
        <el-button 
          type="primary" 
          size="large" 
          class="cta-button"
          @click="$emit('start-test')"
        >
          开始测试
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </div>
    </div>

    <div class="features">
      <div v-for="feature in features" :key="feature.title" class="feature-card">
        <h3>{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.desc }}</p>
        <p class="feature-detail">{{ feature.detail }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-intro {
  text-align: center;
}

.hero-section {
  padding: 60px 20px;
  background: linear-gradient(135deg, #409EFF 0%, #36D1DC 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 60px;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.5em;
  margin-bottom: 20px;
  opacity: 0.9;
}

.description {
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
  opacity: 0.8;
}

.cta-button {
  padding: 12px 30px;
  font-size: 1.1em;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin: 0 0 15px;
  color: #333;
}

.feature-desc {
  color: #666;
  margin-bottom: 10px;
}

.feature-detail {
  color: #999;
  font-size: 0.9em;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }
  
  .subtitle {
    font-size: 1.2em;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>