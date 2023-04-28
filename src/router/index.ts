import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '/login',
    component: ()=> import("../views/LoginPage.vue"),
    props: true
  },
  {
    path: '/',
    redirect: '/tabs/kandang'
  },
  {
    path: '/report',
    component: () => import('@/views/ReportPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/kandang'
      },
      {
        path: 'kandang',
        component: () => import('@/views/TabKandang.vue'),

      },

      {
        path: 'history',
        component: () => import('@/views/TabHistory.vue')
      },
      {
        path: 'setting',
        component: () => import('@/views/TabSetting.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
