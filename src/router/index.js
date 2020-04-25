import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Reset from '@/Pages/Login/Reset'
import Register from '@/pages/Login/Register'

import HomeLayout from '@/pages/Home/Layout'
import HomePage from '@/pages/Home'
import HomeList from '@/pages/Home/List'
import HomeInfo from '@/pages/Home/Info'


import UserLayout from '@/pages/User/Layout';


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
  }, {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset
  }, {
    path: '/user',
    component: UserLayout,
  }
  ]
})
