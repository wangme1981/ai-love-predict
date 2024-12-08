<template>
  <div class="home">
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <!-- 暂时注释掉 logo 图片 -->
          <!-- <img src="/images/logo.png" alt="logo"> -->
          <span>Logo</span>
        </div>
        <div class="nav-links">
          <a href="#about">关于我们</a>
          <a href="#test">开始测试</a>
          <a href="#contact">联系我们</a>
        </div>
      </nav>
    </header>

    <main>
      <!-- 产品介绍 -->
      <section class="section product-section" id="about">
        <h1>AI恋爱契合度预测</h1>
        <p>智能情感分析平台</p>
        <ProductIntro />
      </section>

      <!-- 成功案例展示 -->
      <section class="section stories-section">
        <SuccessStories />
      </section>

      <!-- 快速测试入口 -->
      <section class="section test-section" id="test">
        <QuickTest />
      </section>

      <!-- 用户见证 -->
      <section class="section testimonials-section">
        <Testimonials />
      </section>

      <!-- 联系我们 -->
      <section class="section contact-section" id="contact">
        <ContactForm />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductIntro from './components/ProductIntro.vue'
import SuccessStories from './components/SuccessStories.vue'
import QuickTest from './components/QuickTest.vue'
import Testimonials from './components/Testimonials.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f5f7fa;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #409EFF;
}

.section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-section {
  padding-top: 120px;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-links {
    gap: 15px;
  }
  
  .section {
    padding: 40px 20px;
  }
  
  .product-section {
    padding-top: 100px;
  }
}
</style>