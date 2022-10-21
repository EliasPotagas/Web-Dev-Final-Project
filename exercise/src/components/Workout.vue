<template>
<div> 

 <form @submit.prevent="addWorkout">
        <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Title: </label>
            <div class="control">
                <input class="input" type="text" placeholder="Name Your Workout" required v-model="Title">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Date </label>
            <div class="control"> 
                <input class="input" type="date" v-model="Date">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Location </label>
            <div class="control">
                <input class="input" type="text" placeholder="Location" v-model="Location">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Duration </label>
            <div class="control">
                <input class="input" type="text" placeholder="Duration" v-model="Duration">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Picture</label>
            <div class="control">
                <input class="input" type="text" placeholder="Picture" v-model="Picture">
            </div>
        </div>
    </div>
    <div class="column is-offset-one-quarter">
        <div class="field">
            <label class="label">Type: </label>
            <div class="control">
                <select class ="select is-normal" v-model="Type">
                    <option value="arms"> Arms </option>
                    <option value="legs"> Legs </option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="column is-half is-offset-one-quarter">
        <button v-on:click = "addWorkout(Title,Date,Duration,Location,Picture,Type)" class="button is-primary">Save changes</button>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <button class="button is-light">Cancel</button>
    </div>
    
 </form>



    <!-- meant to be in activity page and pop up with the workout form-->
    <h1 class="title">My Activity</h1>
       <div class="column is-half is-offset-one-quarter">
       <button class="button is-fullwidth">Add Workout </button>
       <ul>
        <Workouts v-for="(item, index) in workout" :key="index"
        :Title="item.Title"
        :Location="item.Location"
        :Duration="item.Duration"
        :Date="item.Date"
        :Picture="item.Picture"
        :Type="item.Type"
        />
    </ul>
     </div> 
</div>

</template>

<script>
import Workouts from '../components/Workouts.vue'
//import AddWorkout from '../components/AddWorkout.vue'

//TODO : BREAKS WHEN YOU INPUT A DATE BUT THE REST WORKS FINE
export default {
    components:{
        Workouts,
        //AddWorkout
    },
    data()
    {
        return{
           workout:[{Title:'',Type:'',Date:'',Duration:'',Location:'',Picture:''}]
        }
    },
    methods:{
        addWorkout(newTitle,newType,newLocation,newDuration,newPicture,newDate){
            this.workout.push({
                Title:newTitle,
                Date:newDate,
                Location:newLocation,
                Duration:newDuration,
                Picture:newPicture,
                Type:newType
            })
        },
        editWorkout(workouts,newTitle,newDate,newLocation,newDuration,newPicture,newType){
            workouts.Title = newTitle,
            workouts.Date = newDate,
            workouts.Location = newLocation,
            workouts.Duration = newDuration,
            workouts.Picture = newPicture,
            workouts.Type = newType
        },
        deleteWorkout(removeWorkout)
        {
            this.workout = this.workout.filter( workouts => workouts.Title !== deleteWorkout.Title)
        },
    }
    }

</script>

<style>

</style>