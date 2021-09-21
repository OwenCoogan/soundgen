import Router from 'vue-router'
import Vue from 'vue'

import Main from '@/views/Main'
import VideoScreen from '@/views/VideoScreen'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      component: Main,
      path: '/',
    },
    {
        component: VideoScreen,
        path: '/Video',
      }
  ]
})

export default router