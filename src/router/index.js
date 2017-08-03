import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
