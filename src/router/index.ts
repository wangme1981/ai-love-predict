import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Analysis from '../views/analysis/Analysis.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/analysis/:id',
      name: 'analysis',
      component: Analysis
    }
  ]
})

export default router 