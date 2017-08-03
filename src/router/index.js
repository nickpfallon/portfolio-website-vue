import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

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
    },
    {
      path: '/about-me',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
