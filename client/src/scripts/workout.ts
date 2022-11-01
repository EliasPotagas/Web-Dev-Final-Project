import { reactive } from "vue";
import type {  User } from "./user";

export interface WorkoutList {
    WorkoutTitle: String;
    Time: Date;
    WorkoutPlace: String;
    Duration: number;
    WorkoutType: String;
    user: User;
}

const workout = reactive([] as WorkoutList[]);

export function addWorkoutToUser(user: User,WorkoutTitle:String,Time:Date,WorkoutPlace:String,Duration:number,WorkoutType:String) {
    workout.push({
        WorkoutTitle,
        Time,
        WorkoutPlace,
        Duration,
        WorkoutType,
        user,
    });
}



export default workout;