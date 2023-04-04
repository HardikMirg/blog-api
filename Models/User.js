const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }, 
    cover_img: {
        type: String,
        required: true,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    about: {
        type: String,
        required: true,
        default: "Hey there!"
    }},
    {
        collection: "Users"
    }
)

module.exports = mongoose.model('User', UserSchema)