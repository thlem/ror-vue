import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Missions from '@/components/missions/Missions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-home',
      component: Home
    },
    {
      path: '/missions',
      name: 'app-missions',
      component: Missions
    }
  ]
})
