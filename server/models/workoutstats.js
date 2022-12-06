// const { connect } = require('./mongo');
// const { ObjectId } = require('mongodb');

// COLLECTION_NAME = 'workoutsstats';

// async function collection(){
//     const client = await connect();
//     return client.db('FitnessApp').collection(COLLECTION_NAME);
// }

// async function getWorkoutsStats() {
//     const db = await collection();
//     const data = await db.find().toArray()
//     return data;
// }

// async function getWorkoutStats(_id) {
//     const db = await collection();
//     const data = await db.findOne({ _id: new ObjectId(_id) })
//     return data;
// }

// //TODO FIX THIS 

// async function getUserWorkoutStats(workoutId) {
//     const db = await collection();
//     const data = await db.find({ workoutId }).toArray();
//     return data
//     // return await Promise.all( data
//     //     .map(async (workout) => ({
//     //         ...workout, 
//     //         workout: await getWorkout(workout._id)
//     //     })));
// };

// async function addWorkoutsStats(req, workoutId) {
//     const db = await collection();
//     await db.insertOne({
//         reps: req.reps,
//         sets: req.sets,
//         workout_id: workoutId
//     });
// }

// async function deleteWorkoutStats(id) {
//     const db = await collection();
//     const result = await db.deleteOne({ _id: new ObjectId(id) });
//     return result;
// }

// module.exports = {
//     collection,
//     getWorkoutsStats,
//     getWorkoutStats,
//     addWorkoutsStats,
//     deleteWorkoutStats,
//     getUserWorkoutStats
//     //editWorkoutStats
// };