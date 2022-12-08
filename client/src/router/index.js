import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import workout from '../components/WorkoutForm.vue'
import Admin from '../views/Admin.vue'
import NewWorkout from '../components/NewWorkout.vue'
import AddWorkout from '../components/Addworkout.vue'
import Friends from '../views/Friends.vue'
import UserProfile from '../views/UserProfile.vue'
import EditWorkout from '../views/EditWorkout.vue'
import StatsWorkout from '../views/StatsWorkout.vue'

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
      path: '/workouts',
      name: 'workouts',
      component: workout
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/newWorkout',
      name: 'NewWorkout',
      component: NewWorkout
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
    {
      path: '/workouts/emails',
      name: 'workouts_by_user',
      component: workout
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditWorkout
    },
    {
      path: '/stats/:id',
      name: 'stats',
      component: StatsWorkout
    }
  ]
})

export default router
