<script>
import WorkoutForm from "../components/WorkoutForm.vue";

import { ref } from "vue";
export default {
  components: { WorkoutForm },
    setup() {
        const popupTriggers = ref(false);
        const handlePopup = () =>{
          popupTriggers.value = !popupTriggers.value
        }

        const status = ref(true);

        const openModal = () => {
        status.value = true;
        console.log(workout)
    };
        return {popupTriggers, handlePopup, status};
    },
    
};
</script>

<template>
  <!--Add popout form  and display users form data when adding to list-->
  <div class="column">
    <h1 class="title">My Activity</h1>
    <div class="column is-half is-offset-one-quarter">
      <button @click = "handlePopup" class="button is-fullwidth" id="addWorkout">Add Workout</button>
      <WorkoutForm v-if="popupTriggers" /> 
    </div>
  </div>
</template>

<style>
</style>