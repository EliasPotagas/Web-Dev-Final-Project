<template>
  <div class="column is-half is-offset-one-quarter">
    <div class="input">
      <input type="text" placeholder="Search User" v-model="filter" />
    </div>
    <div class="table-container">
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <tr>
          <th v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td v-for="item in user" :key="item">
              {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default {
  setup() {
    const filter = ref("");
    const rows = ref([""]);
    const users = ref([
      {
        picture: "temp",
        name: "elias",
        lastname: "pot",
        id: 1 as number,
        email: "email",
        hasPriviledge: "true",
      },
      {
        picture: "temp",
        name: "bob",
        lastname: "john",
        id: 2 as number,
        email: "email",
        hasPriviledge: "false",
      },
      {
        picture: "temp",
        name: "john",
        lastname: "doe",
        id: 3 as number,
        email: "email",
        hasPriviledge: "false",
      },
      {
        picture: "temp",
        name: "elk",
        lastname: "dee",
        id: 4 as number,
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


    return { users, headers, filter };
  },
};
</script>

<style>
</style>