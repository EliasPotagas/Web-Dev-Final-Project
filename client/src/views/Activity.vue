<script>
import Workout from "../components/Workout.vue";
import { ref } from "vue";
export default {
    setup() {
        const popupTriggers = ref(false);
        const handlePopup = () =>{
          popupTriggers.value = !popupTriggers.value
          console.log(popupTriggers)
        }
        console.log(popupTriggers)
        return {popupTriggers, handlePopup};
    },
    components: { Workout }
};
</script>

<template>
  <!--Add popout form  and display users form data when adding to list-->
  <div class="column">
    <h1 class="title">My Activity</h1>
    <div class="column is-half is-offset-one-quarter">
      <button @click = "handlePopup" class="button is-fullwidth">Add Workout</button>
      <Workout v-if="popupTriggers == true"/>
      <ul>
        <Workouts
          v-for="(item, index) in workout"
          :key="index"
          :WorkoutTitle="item.WorkoutTitle"
          :Location="item.Location"
          :Duration="item.Duration"
          :Time="item.Time"
          :Picture="item.Picture"
          :WorkoutType="item.WorkoutType"
        />
      </ul>
    </div>
  </div>

  <!--<div class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="">
            </p>
        </figure>
    </div>-->
</template>

<style>
</style>