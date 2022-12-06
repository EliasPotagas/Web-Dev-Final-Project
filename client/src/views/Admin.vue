<template>
  <div v-if="session.user?.admin">
    <h1 class="title">Admin {{ session.user.firstName }} {{ session.user.lastName }}</h1>

    <div class="column is-half is-offset-one-quarter">
    <div class="input">
      <input type="text" placeholder="Search User" v-model="search" />
      <p class="searchedItem">
        Search for user <b>-{{ search }}-</b>
      </p>
      <p v-if="findUser.length">This User <b>Exists</b></p>
      <p v-else>User <b>Doesn't Exist</b></p>
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
              <td>{{( index + 1)}}</td>
              <td> {{user.firstname }}</td>
              <td> {{ user.lastname }}</td>
              <td> {{ user.id }}</td>
              <td> {{ user.isAdmin }}</td>
              <td> <button class="button is-primary" @click="deleteUser(index)">Delete User</button> </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>

</template>

<script setup lang="ts">
//TODO FIND A WAY TO FIND USER MORE THAN JUST FIRSTNAME
//TODO MAKE NAMES ROUTERLINKS DIRECTED TO THAT USERS PAGE
//TODO MAKE IT NOT DISPLAY THE CURRENTLY LOGGED IN ADMIN ON THE PAGE?
import { computed, ref } from "vue";
import session from '../scripts/session.js'

import { deleteUser, getUser, getUsers } from "../scripts/user";

const Users = getUsers();
const search = ref("");
const headers = ["Index", "First Name", "Last Name", "ID", "Priviledge","Delete User"];

const results = ref(Users);

const findUser = computed(() => {
  return results.value.filter((user) =>
    user.firstname.toLowerCase().includes(search.value)
  );
});
</script>

<style>
</style>