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
    userId : string,
    Description?: string,
    Stats?: [{
        Sets: string,
        Reps: string
    }]
}

const workoutList = reactive([] as Workout[]);

const currentWorkout = reactive({} as Workout);

export function load() {
    api(`workouts/emails/${session.user?.email}`).then((data) => {
    workoutList.splice(0, workoutList.length, ...data as Workout[]);
        console.log('success in loading workoutLists')
    });
}
export function loadStats(workoutId : string) {
    api(`workouts/ids/${workoutId}`).then((data) => {
        Object.assign(currentWorkout, data);
        console.log('loading stats', currentWorkout)    
    });
}

watch(() => session.user, load);


export async function addWorkoutToUser(workout : Workout) {
    await api(`workouts/emails/${session.user?.email}`, workout)
    const i = workoutList.findIndex((x) => x._id === workout._id);
    if (i >= 0) {
        workoutList.splice(i, 1, workout);
    }else{
        workoutList.push(workout);
    }
}

export async function getWorkouts() {  
    return await api<Workout>(`workouts/emails/${session.user?.email}`).then((data) => {
        console.log(data)
        return data;
    });
}

export function getWorkout(_id: string) {
    return api<Workout>(`workouts/emails/${_id}`)
}

//update workout
export async function editWorkout(_id: string, workout : Workout) {
    return await api<Workout>(`workouts/emails/${_id}`, workout, 'PATCH').then((data) => {
        console.log(data)
    });
}

export async function generateDescprition(_id: string, workout : Workout)
{
    return await api<Workout>(`workouts/edit/${_id}`, workout, 'PATCH').then((data) => {
        console.log(data)
    });
}
export function deleteWorkout(_id: string) {
   
    return api<Workout>(`workouts/id/${_id}`,{}, 'DELETE');
}

export async function addStatstoWorkout(data : Workout, workoutId : string){
    await api(`workouts/stats/${workoutId}`, data)
    workoutList.push({...data});
}

export async function deleteStats(index)
{
    workoutList.splice(index,1)
}



export default workoutList;










// Stats?: 
// [{
//     Sets: 1,
//     Reps: 1
// },
// {
//     Sets: 2,
//     Reps: 2
// }]