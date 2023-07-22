import { Auth } from "aws-amplify";
import { createRouter, createWebHistory } from "vue-router"
import LoginPage from "../views/LoginPage.vue"

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: () => import("../views/SignUpPage.vue"),
  },
  {
    path: "/albums",
    name: "AlbumsPage",
    component: () => import("../views/AlbumsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/album/:id",
    name: "AlbumsDetailPage",
    component: () => import("../views/AlbumsDetailPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();
  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
