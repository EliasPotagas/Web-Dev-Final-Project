<template>
  <div>
    <div class="container"> 
        <form @submit.prevent="">
      <div class="column is-half is-offset-one-quarter">
        <div class="field">
          <label class="label">Title </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Name Your Workout"
              required
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
          <label class="label">Location </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Location"
              v-model="Location"
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
              Location,
              Picture,
              WorkoutType
            )
          "
          class="button is-primary"
        >
          Save changes
        </button>
      </div>
      <div class="column is-half is-offset-one-quarter">
        <button class="button is-light">Cancel</button>
      </div>
    </form>
    </div>

  </div>
</template>

<script>
import Workouts from "../components/Workouts.vue";
//import AddWorkout from '../components/AddWorkout.vue'

export default {
  components: {
    Workouts,
    //AddWorkout
  },
  data() {
    return {
      workout: [
        {
          WorkoutTitle: "",
          WorkoutType: "",
          Time: "",
          Duration: "",
          Location: "",
          Picture: "",
        },
      ],
    };
  },
  methods: {
    addWorkout(
      newWorkoutTitle,
      newWorkoutType,
      newLocation,
      newDuration,
      newPicture,
      newTime
    ) {
      this.workout.push({
        WorkoutTitle: newWorkoutTitle,
        Time: newTime,
        Location: newLocation,
        Duration: newDuration,
        Picture: newPicture,
        WorkoutType: newWorkoutType,
      });
    },
    editWorkout(
      workouts,
      newWorkoutTitle,
      newTime,
      newLocation,
      newDuration,
      newPicture,
      newWorkoutType
    ) {
      (workouts.WorkoutTitle = newWorkoutTitle),
        (workouts.Time = newTime),
        (workouts.Location = newLocation),
        (workouts.Duration = newDuration),
        (workouts.Picture = newPicture),
        (workouts.WorkoutType = newWorkoutType);
    },
    deleteWorkout(removeWorkout) {
      this.workout = this.workout.filter(
        (workouts) => workouts.WorkoutTitle !== deleteWorkout.WorkoutTitle
      );
    },
  },
};
</script>

<style>
</style>