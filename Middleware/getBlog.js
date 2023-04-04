const Blog = require('../Models/Blog')

const getBlog = async (req, res, next) => {
    let blog
    try {
        blog = await Blog.findById(req.params.id)
        if (!blog){
            return res.status(404).json({error: 'blog not found'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
    res.blog = blog
    next()
}

module.exports = getBlog