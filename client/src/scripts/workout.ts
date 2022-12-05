import { reactive, watch } from "vue";
import session, { api } from "./session";

export interface Workout {
    _id:  string,
    WorkoutTitle : string,
    Time : string,
    WorkoutPlace: string,
    Duration : number,
    WorkoutType :string,
    Picture : string,
    userId : string
}
export interface ListEnvelope<T> {
    workouts: T[]
  }

const workoutList = reactive([] as Workout[]);

export function load() {
    api(`workouts/${session.user?.email}`).then((data) => {
    workoutList.splice(0, workoutList.length, ...data as Workout[]);
        console.log('success in loading workoutLists')
    });
}

watch(() => session.user, load);

export async function addWorkoutToUser(workout : Workout) {
    await api(`workouts/${session.user?.email}`, workout)
    const i = workoutList.findIndex((x) => x._id === workout._id);
    if (i >= 0) {
        workoutList.splice(i, 1, workout);
    }else{
        workoutList.push(workout);
    }
}

export async function getWorkouts() {  
    return await api<Workout>(`workouts/${session.user?.email}`).then((data) => {
        console.log(data)
        return data;
    });
}

export function getWorkout(_id: string) {
    return api<Workout>(`workouts/${_id}`)
}

export function updateWorkout(_id: string, product: Workout) {
    return api<Workout>(`workouts/${_id}`, workoutList, 'PATCH');
}


export function deleteProduct(_id: string) {
    return api<{deletedCount:boolean}>(`workouts/${_id}`,{}, 'DELETE');
}

export default workoutList;