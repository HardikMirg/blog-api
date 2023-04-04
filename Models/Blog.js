const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    author: {
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
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }},
    {
        collection: "Blogs"
    }
)

module.exports = mongoose.model('Blog', BlogSchema)