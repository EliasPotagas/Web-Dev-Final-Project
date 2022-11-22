<template>

  <div class="column is-half is-offset-one-quarter">
    <div class="input">
      <input type="text" placeholder="Search User" v-model="filter" />
      <p class="searchedItem"> Search for a User {{filter}}</p>
    </div>
    <div class="table-container">
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <tr>
          <th v-for="(header, index) in headers" :key="index">
             {{header}} 
          </th>
        </tr>
        <tbody>
          <tr v-for="(user, index) in Users" :key="index">
            <td> {{ user.fname }} </td>
            <td> {{ user.lname }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import workout, {  deleteuser, getUser, getUsers} from "../scripts/user";

const workoutList = getUsers();


function addWorkout(
  WorkoutTitle: string,
  Time: string,
  Area: String,
  Duration: number,
  Picture: string,
  WorkoutType: String
) 
{
  addUser(WorkoutTitle, Time, Area, Duration, Picture, WorkoutType);
}
</script>

<style>
</style>