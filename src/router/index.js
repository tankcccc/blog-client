import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Create from '@/pages/Create/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          component: Index
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path: '/register',
            component: Register
          },
          {
            path: '/detail',
            component: Detail
          },
          {
            path: '/edit',
            component: Edit,
          },
          {
            path: '/create',
            component: Create,
          },
          {
            path: '/user/:userId',
            component: User
          },
          {
            path: '/my',
            component: My,
          }
    ]
})