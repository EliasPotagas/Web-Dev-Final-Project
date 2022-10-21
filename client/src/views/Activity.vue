<script>
import Workout from '../components/Workout.vue'
import { ref } from 'vue';
export default {
  setup() {
    const popupTriggers = ref ({
      buttonTrigger: false
    });
    return Workout
  }

}
</script>

<template>
  <!--Add popout form  and display users form data when adding to list-->
  <div class="container">
    <h1 class="title">My Activity</h1>
    <div class="column is-half is-offset-one-quarter">
    <button class="button is-fullwidth">Add Workout</button>
    <Workout v-if="popupTriggers.buttonTrigger">
    </Workout>
    
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