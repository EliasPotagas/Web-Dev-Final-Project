const data = require('../data/user.json');
const { connect } = require('./mongo');

async function collection(){
    const client = await connect();
    return client.db('chopiphy').collection('user');
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

module.exports = {
    collection,
    getUsers,
    getUser
};