const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../../Models/User')
const getUser = require('../../Middleware/getUser.js')

router.post('/', async (req, res, next) => {
    try {
        let user = await User.findOne({email: req.body.email})
        if (!user){
            res.userExist = false
        } else {
        res.user = user}
        
    } catch (err) {
        res.json(err)
    }
    next()
}

, async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)

    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        cover_img: req.body.cover_img,
        about: req.body.about,
    })

    if (res.user){
        res.status(403).json({error: 'Email Already in Use!'})
    }
    else try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;