const express = require('express');
const router = express.Router();
const Blog = require('../../Models/Blog')

router.post('/', async (req, res) => {
    const blog = new Blog ({
        author: req.body.author,
        cover_img: req.body.cover_img,
        title: req.body.title,
        description: req.body.description,
        text: req.body.text
    })

    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;