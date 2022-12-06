const express = require('express');
const workouts = require('../models/workoutsstats');
const app = express.Router();

app
    .get('/', (req, res, next) => {
        workouts.getWorkoutsStats()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .get('/ids/:id', (req, res, next) => {
        workouts.getWorkoutStats(req.params.id)
        .then(workout=> {
            if (workout) {
                res.status(200).send(workout);
            } else {
                res.status(404).send('workout not found');
            }            
        })
        .catch(next);   
    }) 
    .get('/stats/:workoutId', (req, res, next) => {
        workouts.getUserWorkoutStats(req.params.workoutId)
        .then(workout=> {
            if (workout) {
                res.status(200).send(workout);
            } else {
                res.status(404).send('workout not found');
            }            
        })
        .catch(next);   
    })
    ;

app
.post('/stats/:userId', (req, res, next) => {
    workouts.addWorkoutsStats(req.body)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

app
.delete('/id/:id', (req, res, next) => {
    workouts.deleteWorkoutStats(req.params.id)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

app
.patch('/stats/:id', (req, res, next) => {
    workouts.editWorkout(req.params.id, req.body)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

module.exports = app;