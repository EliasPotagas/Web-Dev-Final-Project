const express = require('express');
const Users = require('../models/Users');
const app = express.Router();

app
    .get('/', (req, res, next) => {
        Users.getUsers()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Users.getUsers(req.params.id)
        .then(Users=> {
            if (Users) {
                res.status(200).send(Users);
            } else {
                res.status(404).send('Users not found');
            }            
        })
        .catch(next);   
    }) 
    //need to resolve for specific userid to get list here
    .get('/:userId', (req, res, next) => {
        Users.getUsersbyUser(req.params.userId)
        .then(Users=> {
            if (Users) {
                res.status(200).send(Users);
            } else {
                res.status(404).send('Users not found');
            }            
        })
        .catch(next);   
    })
    ;

app
.post('/:userId', (req, res, next) => {
    Users.addUsers(req.body, req.params.userId)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

app
.delete('/:id', (req, res, next) => {
    Users.deleteUsers(req.params.id)
    .then(x=> res.status(200).send(x))
    .catch(next);;
});
module.exports = app;