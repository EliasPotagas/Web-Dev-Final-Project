<!--TODO-->
<template>
  <div class="column">
    <div class="title">
        Weclome {{session.user?.firstName}} {{session.user?.lastName}}
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