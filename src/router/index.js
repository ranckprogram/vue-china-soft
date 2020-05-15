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
import UserCourse from '@/pages/User/Course';
import UserCourseDetail from '@/pages/User/Course/Detail';
import UserExam from '@/pages/User/Exam';
import UserExamPaper from '@/pages/User/Exam/Paper'
import UserInfo from '@/pages/User/Info';
import UserMessage from '@/pages/User/Message';
import UserMessageDetail from '@/pages/User/Message/Detail';


import AdminLayout from '@/pages/Admin/Layout';
import AdminCourse from '@/pages/Admin/Course';
import AdminCourseCreate from '@/pages/Admin/Course/Create';
import AdminCourseExam from '@/pages/Admin/Course/Exam'
import AdminCoursePaper from '@/pages/Admin/Course/Paper'
import AdminCoursePaperView from '@/pages/Admin/Course/View'
import AdminCourseLine from '@/pages/Admin/Course/Line'
import AdminTest from '@/pages/Admin/Test'
import AdminTestCreate from '@/pages/Admin/Test/Create'
import AdminPaperList from '@/pages/Admin/Exam/Paper'
import AdminExamPaperCreate from '@/pages/Admin/Exam/PaperCreate'
import AdminExamPaperEdit from '@/pages/Admin/Exam/PaperEdit'
import AdminExamCreate from '@/pages/Admin/Exam/Create'
import AdminExamList from '@/pages/Admin/Exam/List'
import AdminExamViewProcess from '@/pages/Admin/Exam/ViewExamProcess'
import AdminExamViewFinish from '@/pages/Admin/Exam/ViewExamFinish'
import AdminExamApproval from '@/pages/Admin/Exam/Approval'
import ApprovalInfo from '@/pages/Admin/Exam/ApprovalInfo'
import AdminStatis from '@/pages/Admin/Statis';
import AdminStatisLine from '@/pages/Admin/Statis/Line';


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
    children: [
      {
        path: '/user/course',
        name: 'UserCourse',
        component: UserCourse
      },
      {
        path: '/user/course/detail',
        name: 'UserCourseDetail',
        component: UserCourseDetail
      }, {
        path: '/user/exam',
        name: 'UserExam',
        component: UserExam
      }, {
        path: '/user/exam/:id',
        name: 'UserExamPaper',
        component: UserExamPaper
      }, {
        path: '/user/info',
        name: 'UserInfo',
        component: UserInfo
      }, {
        path: '/user/message',
        name: 'UserMessage',
        component: UserMessage
      },
      {
        path: '/user/message/:id',
        name: 'UserMessageDetail',
        component: UserMessageDetail
      },
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      // 课程
      {
        path: '/admin/course',
        name: 'AdminCourse',
        component: AdminCourse
      },
      {
        path: '/admin/course/create',
        name: 'AdminCourseCreate',
        component: AdminCourseCreate
      },
      {
        path: '/admin/course/exam',
        name: 'AdminCourseExam',
        component: AdminCourseExam
      },
      {
        path: '/admin/course/paper',
        name: 'AdminCoursePaper',
        component: AdminCoursePaper
      },
      {
        path: '/admin/course/paper/:id',
        name: 'AdminCoursePaperView',
        component: AdminCoursePaperView
      },

      {
        path: '/admin/course/line',
        name: 'AdminCourseLine',
        component: AdminCourseLine
      },

      // 试题test 
      {
        path: '/admin/test',
        name: 'AdminTest',
        component: AdminTest
      },
      {
        path: '/admin/test/create',
        name: 'AdminTestCreate',
        component: AdminTestCreate
      },

      // 考试exam
      {
        path: '/admin/exam/paper',
        name: 'AdminPaperList',
        component: AdminPaperList
      },
      {
        path: '/admin/exam/paper/create',
        name: 'AdminExamPaperCreate',
        component: AdminExamPaperCreate
      },
      {
        path: '/admin/exam/paper/edit',
        name: 'AdminExamPaperEdit',
        component: AdminExamPaperEdit
      },
      {
        path: '/admin/exam/create',
        name: 'AdminExamCreate',
        component: AdminExamCreate
      },
      {
        path: '/admin/exam/list',
        name: 'AdminExamList',
        component: AdminExamList
      },
      {
        path: '/admin/exam/process/:id',
        name: 'AdminExamViewProcess',
        component: AdminExamViewProcess
      },
      {
        path: '/admin/exam/finish/:id',
        name: 'AdminExamViewFinish',
        component: AdminExamViewFinish
      },

      {
        path: '/admin/exam/approval',
        name: 'AdminExamApproval',
        component: AdminExamApproval
      }, {
        path: '/admin/exam/approval/info',
        name: 'ApprovalInfo',
        component: ApprovalInfo
      },


      // 统计
      {
        path: '/admin/statis',
        name: 'AdminStatis',
        component: AdminStatis
      },
      {
        path: '/admin/statis/line',
        name: 'AdminStatisLine',
        component: AdminStatisLine
      },
    ]
  }
  ]
})
