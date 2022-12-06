const data = require('../data/workout.json');
const { connect } = require('./mongo');
const { ObjectId } = require('mongodb');

COLLECTION_NAME = 'workouts';

async function collection(){
    const client = await connect();
    return client.db('FitnessApp').collection(COLLECTION_NAME);
}

async function getWorkouts() {
    const db = await collection();
    const data = await db.find().toArray()
    return data;
}

async function getWorkout(_id) {
    const db = await collection();
    const data = await db.findOne({ _id: new ObjectId(_id) })
    return data;
}

//TODO FIX THIS 

async function getUserWorkout(userId) {
    const db = await collection();
    const data = await db.find({ userId }).toArray();
    return data
};

async function addWorkouts(req, userId) {
    const db = await collection();
    await db.insertOne({
        WorkoutTitle: req.WorkoutTitle,
        Time: req.Time,
        WorkoutPlace: req.WorkoutPlace,
        Duration: req.Duration,
        WorkoutType: req.WorkoutType,
        Picture: req.Picture,
        userId: userId,
        Stats: []
    });
}

async function deleteWorkout(id) {
    const db = await collection();
    const result = await db.deleteOne({ _id: new ObjectId(id) });
    return result;
}

async function editWorkout(id, workout) {
    const db = await collection();
    delete workout._id;
    const result = await db.findOneAndUpdate(
        {
            _id: new ObjectId(id)
        },
        {
            $set: workout
        },
        {
            returnOriginal: false
        }
    )
    return result;
}

async function addStats(req, workoutId)
{
    const db = await collection();    
    db.updateOne(
        {
            "_id": new ObjectId(workoutId)
        },
        {
            $push : 
            {Stats: [req.Sets,req.Reps]}
        }
        
        );
}

async function deleteStats(index)
{
    const db = await collection();
    const result = await db.deleteOne({ Stats:[index] });
    return result;
}

// async function getWorkoutStats(_id) {
//     const db = await collection();
//     const data = await db.findOne({ _id: new ObjectId(_id) })
//     return data;
// }

module.exports = {
    collection,
    getWorkouts,
    getWorkout,
    addWorkouts,
    deleteWorkout,
    getUserWorkout,
    editWorkout,
    addStats,
    deleteStats
};