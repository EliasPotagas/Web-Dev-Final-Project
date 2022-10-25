import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Activity from '../views/Activity.vue'
import Workout from '../components/WorkoutForm.vue'
import Admin from '../views/Admin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/workout',
      name: 'workout',
      component: Workout
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})

export default router
