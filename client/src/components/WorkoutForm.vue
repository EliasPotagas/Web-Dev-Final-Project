<script setup lang="ts">
import  workout, { getWorkouts, deleteWorkout } from "../scripts/workout";
import session from "../scripts/session";

//TODO FIX DISPLAY OF CARDS
//ROUTER LINKS 
</script>
<template>
  <div>
    <!-- <div class="column is-half is-offset-one-quarter" v-if="session.user">
   <div class="card" style="margin-top: 15px;" v-for="(workout, index) in workoutList" :key="index" >  
      <header class="card-header">
        <p class="card-header-title" style="margin-left: 40%; marging-right: auto;">
          <router-link to=""> {{ workout }} </router-link>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          {{workout}}
          {{workout}}
          {{workout}}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <button class="card-footer-item" @click="deleteWorkout(index)">Delete</button>
      </footer>
    </div>
  </div> -->

  <div> {{ workout }}</div>
  </div>

</template>
<style>
</style>
