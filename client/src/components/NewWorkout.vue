<script setup lang="ts">

import {  addWorkoutToUser, getWorkouts, Workout} from "../scripts/workout";



const WorkoutTitle = "";
const Time= "";
const Area= "";
const Duration= 0;
const Picture= "";
const WorkoutType= "";

{
  addWorkoutToUser(WorkoutTitle, Time, Area, Duration, Picture, WorkoutType);
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
              <router-link to="/Workout">
                <button
                @click="
                  addWorkoutToUser(
                    WorkoutTitle,
                    Time,
                    Area,
                    Duration,
                    Picture,
                    WorkoutType
                  );
                "
                class="button is-primary"
                id="save"
              >
                Save changes
              </button>
              </router-link>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <router-link class="button is-large is-link" style="margin-top: 10px;" to="/Workout">Cancel</router-link>
            </div>
          </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </form> 
</div>
</div>

    
</template>