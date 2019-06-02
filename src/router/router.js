import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Templates/Home.vue'
import About from '../components/Templates/About.vue'
import Tool from '../components/Templates/Tool.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/Tool',
      name: 'Tool',
      component: Tool
    }
  ]
})
