<script setup lang="ts">
import { ref } from 'vue'
import { ElRate } from 'element-plus'

const testimonials = ref([
  {
    id: 1,
    name: '小王',
    content: '通过平台找到了真正懂我的人,AI分析太准确了!',
    rating: 5
  },
  {
    id: 2,
    name: '小李',
    content: '专业的测评帮我更了解自己,推荐的对象很合适。',
    rating: 5
  },
  {
    id: 3,
    name: '小张',
    content: '使用体验很好,建议和反馈都很实用。',
    rating: 4
  }
])
</script>

<template>
  <div class="testimonials">
    <h2>用户见证</h2>
    <p class="subtitle">听听他们怎么说</p>
    
    <div class="testimonial-grid">
      <div 
        v-for="item in testimonials" 
        :key="item.id"
        class="testimonial-card"
      >
        <div class="user-info">
          <div class="avatar-placeholder"></div>
          <h3>{{ item.name }}</h3>
          <el-rate
            v-model="item.rating"
            disabled
            show-score
            text-color="#ff9900"
          />
        </div>
        <p class="content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  padding: 40px 0;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.testimonial-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.user-info {
  text-align: center;
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e0e0, #f5f5f5);
  margin: 0 auto 10px;
}

.content {
  color: #666;
  line-height: 1.6;
  font-style: italic;
}

@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}
</style>