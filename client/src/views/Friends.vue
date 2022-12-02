<template>
    <div class="column is-half is-offset-one-quarter">
      <div class="input">
        <input type="text" placeholder="Search User" v-model="search" />
        <p class="searchedItem">
          Search for Friend <b>-{{ search }}-</b>
        </p>
        <p v-if="findUser.length">This Person <b>Exists</b></p>
        <p v-else>This Person <b>Doesn't Exist</b></p>
      </div>
      <div class="table-container">
        <table class="table is-bordered is-striped is-narrow is-fullwidth">
          <tr>
            <th v-for="(header, index) in headers" :key="index">
              {{ header }}
            </th>
          </tr>
          <tbody>
            <tr v-for="(user, index) in findUser" :key="index">
              <td>{{ index }}</td>
              <td> {{user.firstname }}</td>
              <td> {{ user.lastname }}</td>
              <td> <button class="button is-primary">Add User</button> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from "vue";
  import { getUsers } from "../scripts/user";
  import session from "../scripts/session";
  
  const Users = getUsers();
  const search = ref("");
  const headers = ["Index","First Name", "Last Name","Add User"];
  
  const results = ref(Users);
  
  const findUser = computed(() => {
    return results.value.filter((user) =>
      user.firstname.toLowerCase().includes(search.value)
    );
  });
  </script>
  
  <style>
  </style>