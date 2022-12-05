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

async function getWorkout(id) {
    const db = await collection();
    const data = await db.findOne({ _id: new ObjectId(id) })
    return data;
}

async function addWorkouts(req, userId) {
    const db = await collection();
    await db.insertOne({
        WorkoutTitle: req.WorkoutTitle,
        Time: req.Time,
        WorkoutPlace: req.WorkoutPlace,
        Duration: req.Duration,
        WorkoutType: req.WorkoutType,
        Picture: req.Picture,
        userId: userId
    });
}

async function deleteWorkout(id) {
    const db = await collection();
    await db.deleteOne({ _id: new ObjectId(id) });
}


module.exports = {
    collection,
    getWorkouts,
    getWorkout,
    addWorkouts,
    deleteWorkout
};