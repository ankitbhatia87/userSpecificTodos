const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String
        }
    },
    phone: String,
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
})

const User = module.exports = mongoose.model('User', UserSchema);