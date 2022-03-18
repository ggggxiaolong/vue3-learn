import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { PATH,_BASIC } from './path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: PATH.BASIC,
      name: "basic",
      component: () => import("../views/basic/BasicHome.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/basic/HelloWorld.vue")
        },
        {
          path: _BASIC.HELLO,
          component: () => import("../views/basic/HelloWorld.vue")
        },
        {
          path: _BASIC.INPUT,
          component: () => import("../views/basic/UserInput.vue")
        },
        {
          path: _BASIC.ATTRIBUTE,
          component: () => import("../views/basic/AttributeBind.vue")
        }
      ]
    }
  ]
})

export default router

