<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Workout from './components/Workout.vue'
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
    Workout
  }
}
</script>
