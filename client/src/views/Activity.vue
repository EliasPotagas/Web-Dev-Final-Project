<script>
import WorkoutForm from "../components/WorkoutForm.vue";

import { ref } from "vue";

//TODO: ITS GETTING EMIT DATA BUT NOT PUSHING ONTO WORKOUTLIST CORRECTLY
//TODO: ITS INPUTTING EMPTY LIST NEED TO FIX  
export default {
  components: { WorkoutForm },
    setup() {
        const popupTriggers = ref(false);
        const handlePopup = () =>{
          popupTriggers.value = !popupTriggers.value
        }
        const status = ref(true)
        const workoutList = ref([''])

        function updateList(workout){
          workoutList.value.push(workout)
        }
        return {popupTriggers, handlePopup, status, workoutList, updateList};
    },
    
};
</script>

<template>
  <!--Add popout form  and display users form data when adding to list-->
  <div class="column">  
    <h1 class="title">My Activity</h1>
    <div class="column is-half is-offset-one-quarter">
      <button @click = "handlePopup" class="button is-fullwidth" id="addWorkout">Add Workout</button>
      <WorkoutForm v-if="popupTriggers" @updateList="updateList($event)"/> 
      <ul>
        <li v-for="(item, index) in workoutList" :key="index">
        {{item[1]}}
      </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>