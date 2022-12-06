<script setup lang="ts">
import currentWorkout, { addStatstoWorkout, deleteStats, loadStats, type as Workout } from "../scripts/workout";
import session from "../scripts/session";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const url = ref(route.params.id as string);

const headers = ["Index", "Sets", "Reps"];

const workout = ref(currentWorkout as Workout);
loadStats(route.fullPath.split('/')[2])


async function save()
{
//console.log('current workount', currentWorkout)
let tempworkout = workout.value.filter(x => x._id === route.fullPath.split('/')[2])[0]

  const data = await addStatstoWorkout(tempworkout, route.fullPath.split('/')[2]);
  session.messages.push({ type: "success", text: `Successfully inserted ${data}`})
}

console.log('routes', route.fullPath.split('/')[2])
console.log('stat workouts', workout)


</script>
<template>
    <div class="column is-half is-offset-one-quarter">
        <form @submit.prevent="" style="margin-top: 50px;">
      <div style="margin-top: 50px;">
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Reps </label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Number of Reps"
                    v-model="workout.Reps"
                  />
                </div>
              </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
              <div class="field">
                <label class="label">Sets </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Number of Sets" v-model="workout.Sets" />
                </div>
              </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
                <button
                @click="
                  save();
                "
                class="button is-primary"
                id="save"
              >
                Save changes
              </button>
            </div>
          </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </form> 
    <div class="table-container">
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </tr>
        <tbody>
          <tr v-for="(stats, index) in workout.Stats" :key="index">
              <td>{{( index + 1)}}</td>
              <td> {{ stats.Reps }}</td>
              <td> {{ stats.Sets }}</td>
              <td> {{ workout._id }}</td>
              <td> <button class="button is-primary" @click="deleteStats(index)">Delete Stats</button> </td>
            </tr>
        </tbody>
        <tr>
            {{ workout }}
        </tr>
      </table>
    </div>
</div>
</template>
