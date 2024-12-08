<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  {
    title: '关于我们',
    items: ['公司介绍', '团队介绍', '联系我们']
  },
  {
    title: '帮助中心',
    items: ['使用指南', '常见问题', '意见反馈']
  },
  {
    title: '服务条款',
    items: ['用户协议', '隐私政策', '免责声明']
  }
])

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <div v-for="section in links" :key="section.title" class="link-section">
          <h3>{{ section.title }}</h3>
          <ul>
            <li v-for="item in section.items" :key="item">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ currentYear }} AI恋爱契合度预测平台 版权所有</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.link-section h3 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 1.2em;
}

.link-section ul {
  list-style: none;
  padding: 0;
}

.link-section li {
  margin-bottom: 10px;
}

.link-section a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.link-section a:hover {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  color: rgba(255,255,255,0.5);
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .link-section {
    text-align: center;
  }
}
</style>