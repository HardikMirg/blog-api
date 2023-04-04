// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjQyYTkxZWI1NjE4NDA4ZDA4ZGE4ZjBjIiwiaWF0IjoxNjgwNTE3NTU1fQ.ypXlYg7dZtOOhffqmWxK17oUhv9SMCGscBc58llPS_Q"
require('dotenv').config()
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const authUser = async (req, res, next) => {
    
    try {
        const token = req.body.token

        if(!token){
            res.status(401).json('unauthorized')
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            res.token = decoded
        })
    } catch (err) {
        res.json(err)
    }
    next()
    
}

module.exports = authUser