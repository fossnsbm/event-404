import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Home from "../views/Home.vue";
import NotFoundPage from "../views/NotFound.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import ProfilePage from "../views/Profile.vue";
import Events from "../views/Events.vue";
import ArticlePage from "../views/Article.vue";
import Blog from "../views/Blog.vue";
import Forum from "../views/Forum.vue";
import EventPage from "../views/Event.vue";
import EditProfilePage from "../views/EditProfile.vue";
import AllEventsPage from "../views/AllEvents.vue";
// import AdminPage from "../views/Admin.vue";
// import firebase from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "ArticlePage",
    component: ArticlePage,
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/settings",
    name: "EditProfilePage",
    component: EditProfilePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/events/:id",
    name: "EventPage",
    component: EventPage,
  },
  {
    path: "/allevents/",
    name: "AllEventsPage",
    component: AllEventsPage,
  },
  {
    path: "/admin/",
    name: "AdminPage",
    // component: AdminPage,
    // component: () => {
    //   if (/@fossnsbm.org\s*$/.test(this.$user)) {
    //     return AdminPage;
    //   } else {
    //     return Login;
    //   }
    // },
  },
];

// if (/@fossnsbm.org\s*$/.test(this.store)) {
//   user = true;
// } else {
//   user = false;
// }

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

//   if (requiresAuth && !auth.user) {
//     next('/login')
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) {
//     const loginpath = window.location.pathname;
//     next({ name: 'login', query: { from: loginpath } });
//   } else if (!requiresAuth && currentUser) {
//     next("defaultView");
//   } else {
//     next();
//   }
// });

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
