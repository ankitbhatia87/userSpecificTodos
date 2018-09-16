const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    userId: String,
    id: String,
    title: String,
    completed: Boolean
})

const Todo = module.exports = mongoose.model('Todo', TodoSchema);