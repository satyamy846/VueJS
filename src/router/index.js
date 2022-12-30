import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import TestVue from "../components/Test.vue"; 
import TheWelcome from "../components/TheWelcome.vue"; 
import HelloWorld from "../components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: TestVue
    },
    {
        path: '/',
        name: 'home',
        component: HelloWorld
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TheWelcome
    }
  ]
})

export default router