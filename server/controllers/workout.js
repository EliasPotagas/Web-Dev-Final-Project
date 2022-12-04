const express = require('express');
const workouts = require('../models/workout');
const app = express.Router();

app
    .get('/', (req, res, next) => {
        workouts.getWorkouts()
        .then(x=> res.status(200).send(x))
        .catch(next);
    });

module.exports = app;