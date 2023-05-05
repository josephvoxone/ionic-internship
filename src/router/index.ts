import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import http from "@/common/api/axios.service";
import sessionService from "@/common/api/session.service";
import tokenService from "@/common/api/token.service";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "default",
    redirect: "/tabs/kandang",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/scan-barcode",
    component: () => import("@/views/ScanBarcode.vue"),
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
    path: "/history-detail",
    component: () => import("@/views/TabHistoryDetail.vue"),
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
  const token = tokenService.getToken();

  if (requiresAuth && !token) {
    next({
      name: "login",
      query: {
        redirectFrom: to.fullPath,
      },
    });
  } else if (token) {
    http.get(`/auth/me`, { timeout: 0 })
      .then((response) => {
        sessionService.saveSession(response.data)
      })
      .catch((e: any) => {
        if (e?.response?.status === 401) {
          localStorage.clear();
        }
        next();
      });
  } else {
    next();
  }
});

router.beforeResolve(async (to, from, next) => {
  // If the user is already logged in
  const publicPages = ["/login", "/register", "/forgot-password"];
  const authpage = publicPages.includes(to.path);
  const isLogin = tokenService.getToken();
  if (authpage && isLogin) {
    // Redirect to the home page instead
    next({ name: "default" });
  } else {
    // Continue to the login page
    next();
  }
});

export default router;
