const express = require('express');
const router = express.Router();
const getBlog = require('../../Middleware/getBlog')

router.delete('/:id', getBlog, async (req, res) => {
    try {
        await res.blog.deleteOne()
        res.json({message: 'blog deleted'})
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;