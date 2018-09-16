const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const route = require('./routes/route');

const app = express();

const port = '3000';

mongoose.connect('mongodb://localhost:27017/users');

app.use(cors());

app.use(bodyParser.json());

mongoose.connection.on('connected', () => {
    console.log('Connected to db');
});

mongoose.connection.on('error', (err) => {
    if(err) {
        console.log(err);
    }
});

app.use('/api', route);

app.use(express.static(path.join('__dirname', 'public')));

app.get('/', (req, res)=>{
    res.send('initiated');
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})