<template>
  <div class="column is-half is-offset-one-quarter">
    <div class="input">
      <input type="text" placeholder="Search User" v-model="filter" />
      <p class="searchedItem"> Searched Term - {{filter}}</p>
    </div>
    <div class="table-container">
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <tr>
          <th v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
        <tbody>
          <tr v-for="user in search" :key="user.id">
            <td v-for="item in user" :key="item">
              {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const filter = ref("");
    const users = ref([
      {
        picture: "temp",
        name: "elias",
        lastname: "pot",
        id: '1',
        email: "email",
        hasPriviledge: "true",
      },
      {
        picture: "temp",
        name: "bob",
        lastname: "john",
        id: '2',
        email: "email",
        hasPriviledge: "false",
      },
      {
        picture: "temp",
        name: "john",
        lastname: "doe",
        id: '3',
        email: "email",
        hasPriviledge: "false",
      },
      {
        picture: "temp",
        name: "elk",
        lastname: "dee",
        id: '4',
        email: "email",
        hasPriviledge: "false",
      },
    ]);
    const headers = [
      "Profile",
      "FirstName",
      "LastName",
      "ID",
      "Email",
      "Priviledge",
    ];

    const search = computed(() => {
      return users.value.filter((user) => user.name.includes(filter.value))
    })

    const addUser = () => {

    }

    const deleteUser =() => {

    }

    return { users, headers, filter, search, addUser, deleteUser };
  },
};
</script>

<style>
</style>