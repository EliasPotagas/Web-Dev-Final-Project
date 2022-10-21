<template>
  <li>
        {{Title}}
        {{Type}}
        {{Date}}
        {{Location}}
        {{Duration}}
        {{Picture}}
        
        
  </li>
</template>

<script>
import { isIntegerKey } from '@vue/shared';

export default {
    props:{
        Title: '',
        Duration: '',
        Location: '',
        Date: '',
        Type: '',
        Picture: ''
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