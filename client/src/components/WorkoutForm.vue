<script setup lang="ts">

import {  defineProps, reactive } from "vue";
import {  addWorkoutToUser, getWorkouts, Workout} from "../scripts/workout";

const { popupTriggers } = defineProps<{
  popupTriggers: boolean;
}>();

const workoutList = getWorkouts();

const WorkoutTitle = "";
const Time= "";
const Area= "";
const Duration= 0;
const Picture= "";
const WorkoutType= "";

function addWorkout(
  WorkoutTitle: string,
  Time: string,
  Area: String,
  Duration: number,
  Picture: string,
  WorkoutType: String
) 
{
  addWorkoutToUser(WorkoutTitle, Time, Area, Duration, Picture, WorkoutType);
}

</script>
<template>
  <!--TODO ADD REQURED TAGS ON FORM-->
  <div>

   <div class="card" style="margin-top: 15px;" v-for="(workout, index) in workoutList" :key="index" >  
      <header class="card-header">
        <p class="card-header-title" style="margin-left: 40%; marging-right: auto;">
          {{ workout.WorkoutTitle }}
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          {{workout.WorkoutType}}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>

    <router-link class="button is-large is-link" style="margin-top: 10px;" to="/newWorkout">Add Workout</router-link>
  </div>
</template>
<style>
</style>
