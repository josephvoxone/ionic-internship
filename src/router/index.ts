import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import http from "@/common/api/axios.service";
import sessionService from "@/common/api/session.service";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/",
    redirect: "/tabs/kandang",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/report",
    component: () => import("@/views/ReportPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/kandang",
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "kandang",
        component: () => import("@/views/TabKandang.vue"),
        meta: {
          requiresAuth: true,
        },
      },

      {
        path: "history",
        component: () => import("@/views/TabHistory.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "setting",
        component: () => import("@/views/TabSetting.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);

  // If auth isn't required for the route, just continue.
  if (!requiresAuth) return next();

  await http
    .get(`/auth/me`)
    .then((response) => {
      sessionService.saveSession(response.data);
      next();
    })
    .catch((e) => {
      // If token not available, expired or not found
      if (e.response.status === 401) {
        localStorage.clear();
      }

      next({
        name: "login",
        query: {
          redirectFrom: to.fullPath,
        },
      });
    });
});
export default router;
