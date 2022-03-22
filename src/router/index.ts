import { createRouter, createWebHistory } from "vue-router";
import { PATH, _BASIC, _PRACTICal } from "./path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("../views/basic/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: PATH.BASIC,
      name: "basic",
      component: () => import("../views/basic/index.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/basic/HelloWorld.vue"),
        },
        {
          path: _BASIC.HELLO,
          component: () => import("../views/basic/HelloWorld.vue"),
        },
        {
          path: _BASIC.INPUT,
          component: () => import("../views/basic/UserInput.vue"),
        },
        {
          path: _BASIC.ATTRIBUTE,
          component: () => import("../views/basic/AttributeBind.vue"),
        },
        {
          path: _BASIC.SWITCH,
          component: () => import("../views/basic/SwitchLoop.vue"),
        },
        {
          path: _BASIC.BIND,
          component: () => import("../views/basic/TabelBind.vue"),
        },
        {
          path: _BASIC.COMPONENT,
          component: () => import("../views/basic/component/index.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: PATH.PRACTICAL,
      component: () => import("../views/practical/index.vue"),
      children: [
        {
          path: _PRACTICal.MARKDOWN,
          component: () => import("../views/practical/MarkdownEditor.vue"),
        },
        {
          path: _PRACTICal.FETCH,
          component: () => import("../views/practical/fetch/index.vue"),
        },
        {
          path: _PRACTICal.SORT_GRID,
          component: () => import("../views/practical/sortGrid/index.vue"),
        },
      ],
    },
  ],
});

export default router;
