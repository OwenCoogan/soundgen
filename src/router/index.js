import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VideoPlayer from '../views/VideoPlayer.vue'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/videoplayer',
      component: VideoPlayer
    },
   
  ]
})

export default router