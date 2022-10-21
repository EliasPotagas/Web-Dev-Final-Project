<template>
  <li>{{Title}}
        {{Date}}
        {{Location}}
        {{Type}}
        {{Duration}}
        {{Picture}}
        <button @click="$emit('on-delete')" class="button">Delete</button>
        <button @click="$emit('on-edit')" class="button">Edit</button>

  </li>
</template>

<script>
import { isIntegerKey } from '@vue/shared';

export default {
    props:{
        Title: String,
        Date: String,
        Location: String,
        Type: String,
        Duration: '',
        Picture:''
    },
    data(){
        return{
            isEditing: false,
            newTitle:"",
            newDate:"",
            newDuration:"",
            newLocation:"",
            newPicture:"",
            newType:"",
        }
    }
}
</script>

<style>

</style>