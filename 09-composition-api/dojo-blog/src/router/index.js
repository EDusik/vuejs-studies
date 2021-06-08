import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewHome from '../views/NewHome.vue'

const routes = [
  {
    path: '/',
    name: 'NewHome',
    component: NewHome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
