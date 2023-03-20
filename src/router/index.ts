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
    path: '/scan-barcode',
    component: () => import('@/views/ScanBarcodePage.vue')
  },
  {
    path: '/detail',
    component: () => import('@/views/DetailPage.vue')
  },
  {
    path: '/change-name',
    component: () => import('@/views/ChangeNamePage.vue')
  },
  {
    path: '/change-password',
    component: () => import('@/views/ChangePasswordPage.vue')
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
        component: () => import('@/views/KandangPage.vue'),

      },

      {
        path: 'history',
        component: () => import('@/views/HistoryPage.vue')
      },
      {
        path: 'setting',
        component: () => import('@/views/SettingPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
