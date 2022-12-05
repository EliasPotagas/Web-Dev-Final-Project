import { reactive, watch } from "vue";
import session, { api } from "./session";

export interface Workout {
    WorkoutTitle : String,
    Time : String,
    WorkoutPlace: String,
    Duration : number,
    WorkoutType :String,
    Picture : String,
    userId : number,
    _id:  String
}

const workout = reactive([] as Workout[]);

export function addWorkoutToUser(workout : Workout) {
        api(`workout/${session.user?.email}`, { workout }).then(() => {
                session.messages.push({ type: 'success', text: `Updated ${workout.WorkoutTitle}`});
        });
    }

export async function getWorkouts() {
    let x = await api<Workout>('workout');
    console.log("getWorkouts", x)
    return x;
}

export function getWorkout(id: number) {
    return api<Workout>(`workout/${id}`)
}

export async function deleteWorkout(_id : string) {
    await api ('workouts/${session.user?.email/${_id}', null, 'DELETE');
    const i = workout.findIndex(w => w._id === _id);
    if( i >= 0) {
        workout.splice(i, 1);
    }
    else{
        console.log("error with deleteWorkout");
    }
}

export function load() {
    if(session.user)
    {
        api(`workout/${session.user?.email}`).then((data) => {
            workout.splice(0, workout.length, ...(data as Workout[]));
        });
    }
    else
    {
        console.log("no user");
    }
   
}
watch(() => session.user, load);


export function pushWorkout(WorkoutTitle:String, Time: String, WorkoutPlace: String, Duration: number, WorkoutType: String, Picture: String, userId: number, _id: String) 
{
{
    workout.push({
        WorkoutTitle : "",
        Time : "",
        WorkoutPlace: "",
        Duration : 0,
        WorkoutType : "",
        Picture : "",
        userId: session.user?.id,
        _id: ""

    });
    addWorkoutToUser(workout[workout.length - 1]);
}
}
export default workout;