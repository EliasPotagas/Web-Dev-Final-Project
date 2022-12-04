import { reactive } from "vue";
import data from '../data/workout.json';
import { api } from "./session";

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
    return api<ListEnvelope<Workout>>('workout');
}

export function getWorkout(id: number) {
    return api<Workout>(`workouts/${id}`)
}

export function deleteWorkout(index){
    workout.splice(index,1)
}


export interface ListEnvelope<T> {
    workouts: T[]
  }
export default workout;