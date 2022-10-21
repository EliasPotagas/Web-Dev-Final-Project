<template>
  <!-- Add list of users, edit, delete, search-->
  <div>
    <h1 class="hero">Admin Page</h1>
    <table class="table">
      <thead>
        <tr>Names</tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in users" :key=index><td>{{item.Name}}</td></tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {

  data(){
    users:[
      {Name: "Elias"},
      {Name: "Jan"},
      {Name: "Bob"},
      {Name: "John"},
  ]
  }
}
</script>

<style>

</style>