const data = require('../data/user.json');
const { connect } = require('./mongo');

COLLECTION_NAME = 'user';


async function collection(){
    const client = await connect();
    return client.db('FitnessApp').collection('user');
}

async function getUsers() {
    const db = await collection();
    const data = await db.find().toArray()
    return data;
}

async function getUser(id) {
    const db = await collection();
    const data = await db.findOne({ _id: ObjectID(id) })
    return data;
}

async function addUser(req, userId) {
    const db = await collection();
    await db.insertOne({
        FirstName: req.FirstName,
        LastName: req.LastName,
        Email: req.Email,
        userId: userId
    });
}

async function deleteUser(id) {
    const db = await collection();
    await db.deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
    collection,
    getUsers,
    getUser,
    addUser,
    deleteUser
};