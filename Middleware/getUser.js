const User = require('../Models/User')

const getUser = async (req, res, next) => {
    try {
        let user = await User.findOne({email: req.body.email})
        if (!user){
            res.status(404).json({error: 'does not exist'})
            res.userExist = false
        } else {
        res.user = user}
        
    } catch (err) {
        res.json(err)
    }
    next()
}

module.exports = getUser