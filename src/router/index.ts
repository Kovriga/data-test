import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import MainPage from '@/views/MainPage.vue'
import Register from '@/views/Register.vue'
import Main from '@/views/Main.vue'
import Tests from '@/views/Tests.vue'
import Sections from '@/views/Sections.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainPage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/main', component: Main, children: [
      { path: '/testing', component: Tests },
      { path: '/sections', component: Sections },
      { path: '/rating', component: Tests },
      { path: '/shop', component: Tests },
      { path: '/profile', component: Tests },
      ]
    },
  ],
})

export default router
