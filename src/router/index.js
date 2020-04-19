import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

import HomeLayout from '@/pages/Home/Layout'
import HomePage from '@/pages/Home'
import HomeList from '@/pages/Home/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: HomeLayout,
      children: [
        {
          path: '/',
          name: 'HomePage',
          component: HomePage
        }, {
          path: '/home/list',
          name: 'HomeList',
          component: HomeList
        },
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
