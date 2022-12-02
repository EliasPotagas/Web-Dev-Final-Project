<template>

<div>
    <div v-if="session.user != null">
        <div class="column is-half is-offset-one-quarter">
            <router-link class="button is-large is-link" style="margin-top: 10px;" to="/newWorkout">Add Workout</router-link>
        </div>
    </div>
    <div v-else>
        <h1><b class="title">YOU MUST BE LOGGED IN TO VIEW THIS PAGE</b></h1>
    </div>
</div>

</template>

<script setup lang="ts">
import session, { login, logout } from "../scripts/session.js";

</script>
