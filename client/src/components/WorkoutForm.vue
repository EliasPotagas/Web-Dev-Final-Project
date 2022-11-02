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
    <form @submit.prevent="">
      <div class="modal" :class="{ 'is-active': popupTriggers }">
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
                    Area,
                    Duration,
                    Picture,
                    WorkoutType
                  );
                  popupTriggers = !popupTriggers;
                "
                class="button is-primary"
                id="save"
              >
                Save changes
              </button>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <button
                class="button is-light"
                id="cancel"
                @click="popupTriggers = !popupTriggers"
              >
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
