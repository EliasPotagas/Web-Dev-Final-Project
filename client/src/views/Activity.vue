<script setup lang="ts">
// import WorkoutForm from "../components/WorkoutForm.vue";
import { getWorkouts } from "../scripts/workout";
import { App, ref, reactive } from "vue";

//TODO: ITS GETTING EMIT DATA BUT NOT PUSHING ONTO WORKOUTLIST CORRECTLY
//TODO: ITS INPUTTING EMPTY LIST NEED TO FIX  

//TODO CONVERT THIS TO TYPESCRIPT


const workoutList = getWorkouts();
const popupTriggers = ref(false);

function updateList(workout)
{
  workoutList.push(workout)
}


</script>

<template>
  <div class="column">  
    <h1 class="title">My Activity</h1>
    <div class="column is-half is-offset-one-quarter">
      <button @click="popupTriggers = !popupTriggers" class="button is-fullwidth" id="addWorkout">View Workouts</button>
      <WorkoutForm :popup-triggers="popupTriggers"
      v-if="popupTriggers"
      @updateList="updateList($event)"/> 
      <!-- <ul>
        <li v-for="(item, index) in workoutList" :key="index">
        {{ item.WorkoutTitle }}
      </li>
      </ul> -->
    </div>
  </div>
</template>

<style>
</style>
