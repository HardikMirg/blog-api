require('dotenv').config();
const express = require('express');
const router = express.Router();
const getUser = require('../../Middleware/getUser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

router.post('/', getUser, async (req, res) => {
    let verifyPass
    if (res.userExist != false){
        verifyPass = bcrypt.compareSync(req.body.password, res.user.password)
        if (verifyPass == false){
            res.status(401).json({error: 'please login with correct credentials'})
        } else {
            const payload = {
                user: res.user.id
            }
            const authToken = jwt.sign(payload, JWT_SECRET)
            res.json(authToken)
    
        }
    }
    
})

module.exports = router;