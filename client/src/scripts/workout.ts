import { reactive } from "vue";
import data from '../data/workout.json';


export interface Workout {
    WorkoutTitle : String,
    Time : String,
    WorkoutPlace: String,
    Duration : number,
    WorkoutType :String,
    Picture : String,
}

const workout = reactive(data.WorkoutList as Workout[]);

export function addWorkoutToUser(WorkoutTitle:String,Time:String,WorkoutPlace:String,Duration:number,WorkoutType:String,Picture:String) {
    if(WorkoutTitle.length == 0 || Time.length == 0 || WorkoutPlace.length == 0 || Duration == null || WorkoutType.length == 0 )
    {
        return;
    }
    else{
        workout.push({
            WorkoutTitle,
            Time,
            WorkoutPlace,
            Duration,
            WorkoutType,
            Picture,
        });
    }

}

export function getWorkouts() {
    return workout;
}

export function deleteWorkout(index){
    workout.splice(index,1)
}
export default workout;