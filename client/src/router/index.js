import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Workout from '../components/WorkoutForm.vue'
import Admin from '../views/Admin.vue'
import newWorkout from '../components/NewWorkout.vue'
import AddWorkout from '../components/AddWorkout.vue'
import Friends from '../views/Friends.vue'
import UserProfile from '../views/UserProfile.vue'


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
      path: '/workout',
      name: 'workout',
      component: Workout
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/newWorkout',
      name: 'workoutform',
      component: newWorkout
    },
    {
      path: '/CreatePlan',
      name: 'CreatePlan',
      component: AddWorkout
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile
    },
  ]
})

export default router
