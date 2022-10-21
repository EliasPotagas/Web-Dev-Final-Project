<template>
<div> 
 <form>
        <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Title: </label>
            <div class="control">
                <input class="input" type="text" placeholder="Name Your Workout" required v-model="workout">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Date: </label>
            <div class="control"> 
                <input class="input" type="date" required v-model="date">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Location: </label>
            <div class="control">
                <input class="input" type="text" placeholder="Location" required v-model="location">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Duration: </label>
            <div class="control">
                <input class="input" type="text" placeholder="Duration" required v-model="duration">
            </div>
        </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <div class="field">
            <label class="label">Picture</label>
            <div class="control">
                <input class="input" type="text" placeholder="Picture">
            </div>
        </div>
    </div>
    <div class="column is-offset-one-quarter">
        <div class="field">
            <label class="label">Type: </label>
            <div class="control">
                <select class ="select is-normal" required v-model="type">
                    <option value="arms"> Arms </option>
                    <option value="legs"> Legs </option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="column is-half is-offset-one-quarter">
        <button @click = "addworkout" class="button is-primary">Save changes</button>
    </div>
    <div class="column is-half is-offset-one-quarter">
        <button class="button is-light">Cancel</button>
    </div>
 </form>


 <h1 class="title">My Activity</h1>
    <div class="column is-half is-offset-one-quarter">
    
    <button class="button is-fullwidth">Add Workout</button>
    <ul class="workout-list">
        <Workouts 
        v-for="(workouts,index) in workout" :key="index"
        :Title="workout.Title"
        :Duration="workout.Duration"
        :Location="workout.Location"
        :Picture="workout.Picture"
        :Type="workout.Type"
        />
    </ul>
    
  </div>
</div>
</template>

<script>
import Workouts from '../components/Workouts.vue'
export default {
    components:{
        Workouts
    },
    data()
    {
        return{
           workout:[
            {Title:'',Date:'',Location:'',Duration:'',Picture:'',Type:''}
           ]
        }
    },
    methods:{
        addWorkout(newTitle,newDate,newLocation,newDuration,newPicture,newType){
            this.workout.push({
                Title:newTitle, 
                Date:newDate,
                Location:newLocation,
                Duration: newDuration,
                Picture,newPicture,
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