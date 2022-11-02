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
    workout.push({
        WorkoutTitle,
        Time,
        WorkoutPlace,
        Duration,
        WorkoutType,
        Picture,
    });
}

export function getWorkouts() {
    return workout;
}

export default workout;