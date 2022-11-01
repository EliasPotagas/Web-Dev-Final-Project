<script lang="ts">
import Workouts from "../components/Workouts.vue";
import { ref } from "vue";

export default {
  components: {
    Workouts,
  },
  setup(props,context) {
    
    const workout = ref([
      {
        WorkoutTitle: "",
        Area: "",
        Duration: "",
        Time: "",
        Picture: "",
        WorkoutType: "",
        ID: "",
      },
    ]);

    const addWorkout = (
      newWorkoutTitle,
      newArea,
      newDuration,
      newTime,
      newPicture,
      newWorkoutType
    ) => {
      workout.value.push({
        WorkoutTitle: newWorkoutTitle,
        Area: newArea,
        Duration: newDuration,
        Time: newTime,
        Picture: newPicture,
        WorkoutType: newWorkoutType,
      });
      closeModal()
    };

    function sendEvent(){
      context.emit('updateList',workout.value)
    }
    const isEditing = (state) => {
      
    };

    
    const status = ref(true);

    const closeModal = () => {
      status.value = false;
    };
    return { workout, addWorkout, isEditing, status, closeModal, sendEvent };
  },
};
</script>
<template>
  <!--TODO ADD REQURED TAGS ON FORM-->
  <div>
    <form @submit.prevent="">
      <div class="modal" :class="{ 'is-active': status }">
        <div class="modal-background is-white">
          <div class="modal-content has-background-white py-5 px-5">
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Title </label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Name Your Workout"
                    v-model="WorkoutTitle"
                  />
                </div>
              </div>  
            </div>
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Time </label>
                <div class="control">
                  <input class="input" type="date" v-model="Time" />
                </div>
              </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Area </label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Area"
                    v-model="Area"
                  />
                </div>
              </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Duration </label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Duration"
                    v-model="Duration"
                  />
                </div>
              </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Picture</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Picture"
                    v-model="Picture"
                  />
                </div>
              </div>
            </div>
            <div class="column is-offset-one-quarter">
              <div class="field">
                <label class="label">WorkoutType: </label>
                <div class="control">
                  <select class="select is-normal" v-model="WorkoutType">
                    <option value="arms">Arms</option>
                    <option value="legs">Legs</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <button
                @click="
                  addWorkout(
                    WorkoutTitle,
                    Time,
                    Duration,
                    Area,
                    Picture,
                    WorkoutType
                  );
                  sendEvent()
                "
                class="button is-primary"
                id="save"
              >
                Save changes
              </button>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <button class="button is-light" id="cancel" @click="closeModal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </form>
  </div>
</template>



<style>
</style>