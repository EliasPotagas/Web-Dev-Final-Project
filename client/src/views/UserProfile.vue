<!--TODO-->
<template>
  <div class="column">
    <div class="title">
        Weclome FIRST NAME: {{session.user?.firstName}} LASTNAME: {{session.user?.lastName}} EMAIL: {{session.user?.email}}
    </div>
    <div>
        display bnasic info for user
    </div>
  </div>
</template>

<script setup lang="ts">
import session from '../scripts/session';

</script>

<style>

</style>