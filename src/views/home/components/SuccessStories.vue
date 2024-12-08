<script setup lang="ts">
import { ref } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'

const stories = ref([
  {
    id: 1,
    title: '90后程序员与设计师的浪漫邂逅',
    content: '通过AI分析发现两人性格互补,共同的创造力让他们擦出火花...',
    matchRate: '98%'
  },
  {
    id: 2,
    title: '跨国恋情修成正果',
    content: '距离不是问题,价值观的高度契合让他们克服了所有困难...',
    matchRate: '95%'
  },
  {
    id: 3,
    title: '二次婚恋重获幸福',
    content: 'AI深度分析帮助他们找到真正适合的伴侣,开启人生新篇章...',
    matchRate: '96%'
  }
])
</script>

<template>
  <div class="success-stories">
    <h2>成功案例</h2>
    <p class="subtitle">每一个幸福的故事都从这里开始</p>
    
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="story in stories" :key="story.id">
        <div class="story-card">
          <div class="story-image">
            <div class="placeholder-image"></div>
            <div class="match-rate">契合度 {{ story.matchRate }}</div>
          </div>
          <div class="story-content">
            <h3>{{ story.title }}</h3>
            <p>{{ story.content }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.success-stories {
  padding: 40px 0;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.story-card {
  height: 100%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.story-image {
  position: relative;
  height: 250px;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e0e0e0, #f5f5f5);
}

.match-rate {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(64,158,255,0.9);
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
}

.story-content {
  padding: 20px;
}

.story-content h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.story-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

:deep(.el-carousel__item) {
  padding: 0 10px;
}

@media (max-width: 768px) {
  .story-image {
    height: 200px;
  }
}
</style>