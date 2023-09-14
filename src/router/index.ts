import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/es/helper'

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__
      ? '/app/app-vue3-vite/' : '/'
  ),
  routes: []
})

export default router
