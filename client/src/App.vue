<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import WorkoutForm from './components/WorkoutForm.vue'
import Workouts from './components/Workouts.vue'


</script>

<template>
  <div class="container">
    <header>
    <Navbar/>
    </header>
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    Navbar,
    Workouts,
    WorkoutForm
  }
}
</script>
