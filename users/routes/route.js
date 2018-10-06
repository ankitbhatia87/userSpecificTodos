const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const Todo = require('../models/Todo');

router.get('/users', (req, res, next)=>{
    User.find((err, users)=>{
        res.json(users);
    })
})

router.get('/details/:id', (req, res, next)=>{
    User.find((err, users) => {
        let user = users.filter(u => u.id == req.params.id);
        res.json(user);
    })
})

router.get('/details/:id/todos', (req, res, next) => {
    User.find((err, users) => {
        let user = users.filter(u => u.id == req.params.id);
        Todo.find((err, todos)=>{
            let todo = todos.filter(t => t.userId == req.params.id);
            res.json(todo);
            console.log(todo);
        })
    })
})

module.exports = router;