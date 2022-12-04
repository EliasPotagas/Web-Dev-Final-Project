const data = require('../data/workout.json');
const { connect } = require('./mongo');

async function collection(){
    const client = await connect();
    return client.db('FitnessApp').collection('workout');
}

async function getWorkouts() {
    const db = await collection();
    const data = await db.find().toArray()
    return data;
}

async function getWorkout(id) {
    const db = await collection();
    const data = await db.findOne({ _id: ObjectID(id) })
    return data;
}

module.exports = {
    collection,
    getWorkouts,
    getWorkout
};