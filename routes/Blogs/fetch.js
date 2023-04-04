const express = require('express');
const router = express.Router();
const Blog = require('../../Models/Blog')
const getBlog = require('../../Middleware/getBlog')

router.get('/', async (req, res) => {
    try {
        blogs = await Blog.find()
        res.json(blogs)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', getBlog, async (req, res) => {
    res.json(res.blog)
});

module.exports = router;