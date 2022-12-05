const express = require('express');
const workouts = require('../models/workouts');
const app = express.Router();

app
    .get('/', (req, res, next) => {
        workouts.getWorkouts()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        workouts.getWorkout(req.params.id)
        .then(workout=> {
            if (workout) {
                res.status(200).send(workout);
            } else {
                res.status(404).send('workout not found');
            }            
        })
        .catch(next);   
    }) 
    //need to resolve for specific userid to get list here
    .get('/:userId', (req, res, next) => {
        workouts.getUserWorkout(req.params.userId)
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
.post('/:userId', (req, res, next) => {
    workouts.addWorkouts(req.body, req.params.userId)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

app
.delete('/:id', (req, res, next) => {
    workouts.deleteWorkout(req.params.id)
    .then(x=> res.status(200).send(x))
    .catch(next);;
});
module.exports = app;