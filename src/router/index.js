import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      component: Home
    },
   
  ]
})

export default router