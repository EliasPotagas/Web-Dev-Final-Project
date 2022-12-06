// import { reactive, watch } from "vue";
// import session, { api } from "./session";
// import workout from "./workout";

// export interface WorkoutStats {
//     _id:  string,
//     workout_id:  string,
//     Sets: string,
//     Reps: string
// }

// const workoutStats = reactive([] as WorkoutStats[]);


// export function load(w_id : string) {
//     api(`workouts/stats/${w_id}`).then((data) => {
//     workoutStats.splice(0, workoutStats.length, ...data as WorkoutStats[]);
//         console.log('success in loading workoutStats')
//     });
// }


// export async function addStatstoWorkout(workoutstat : WorkoutStats) {
//     console.log('asdasdads', workoutstat)
//     await api(`workouts/stats/${workout._id}`, workoutstat)
//     const i = workoutStats.findIndex((x) => x._id === workoutstat._id);
//     if (i >= 0) {
//         workoutStats.splice(i, 1, workoutstat);
//     }else{
//         workoutStats.push(workoutstat);
//     }
// }

// export default workoutStats;
