import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

import HomeLayout from '@/pages/Home/Layout'
import HomePage from '@/pages/Home'
import HomeList from '@/pages/Home/List'
import HomeInfo from '@/pages/Home/Info'
Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    component: HomeLayout,
    children: [
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage
      }, {
        path: '/home/list',
        name: 'HomeList',
        component: HomeList
      }, {
        path: '/home/info',
        name: 'HomeInfo',
        component: HomeInfo
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
