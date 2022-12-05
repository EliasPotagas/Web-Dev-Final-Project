<script setup lang="ts">

import { reactive } from "@vue/reactivity";
import { Workout, addWorkoutToUser, load} from "../scripts/workout";
import session from "../scripts/session";
import { ref } from "vue";

const workout = ref({} as Workout[]);


async function save()
{
  console.log(workout.value)
  const data = await addWorkoutToUser(workout.value);
  session.messages.push({ type: "success", text: `Successfully inserted ${data}`})
}


</script>
<template>
<div class="column is-half is-offset-one-quarter">
  <div style="margin-top: 50px;">
 <form @submit.prevent="" style="margin-top: 50px;">
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
                  save().then(data => load());
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
    </form> 
</div>
</div>
</template>