<script setup lang="ts">
import session, { api } from '../scripts/session';
import { useRoute, useRouter } from "vue-router";
import { editWorkout, getWorkout, load, type Workout } from '../scripts/workout';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const workout = ref({} as Workout);
const urlId = ref(route.params.id as string)


async function save(workout : Workout){
    console.log('edit working', workout)
    console.log('workoutlist ID', workout._id)
    const data = await editWorkout(urlId.value, workout).then(data => load());
}


</script>

<template>
    <div>
        
<div> <form @submit.prevent="" style="margin-top: 50px;">
    <div style="margin-top: 50px;">
          <div class="column is-half is-offset-one-quarter">
            <div class="field">
              <label class="label">Title </label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Name Your Workout"
                  v-model="workout.WorkoutTitle"
                />
              </div>
            </div>
          </div>
          <div class="column is-half is-offset-one-quarter">
            <div class="field">
              <label class="label">Time </label>
              <div class="control">
                <input class="input" type="date" v-model="workout.Time" />
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
                  v-model="workout.Area"
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
                  v-model="workout.Duration"
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
                  v-model="workout.Picture"
                />
              </div>
            </div>
          </div>
          <div class="column is-offset-one-quarter">
            <div class="field">
              <label class="label">WorkoutType: </label>
              <div class="control">
                <select class="select is-normal" v-model="workout.WorkoutType">
                  <option value="arms">Arms</option>
                  <option value="legs">Legs</option>
                </select>
              </div>
            </div>
          </div>
          <div class="column is-half is-offset-one-quarter">
            <router-link to="/workouts/emails">
                <button
                @click="
                  save(workout);
                "
                class="button is-primary"
                id="save"
              >
                Save changes
              </button>
            </router-link>
          </div>
          <div class="column is-half is-offset-one-quarter">
            <router-link class="button is-large is-link" style="margin-top: 10px;" to="/workouts/emails">Cancel</router-link>
          </div>
        </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </form> </div>
    </div>
</template>



<style>

</style>
