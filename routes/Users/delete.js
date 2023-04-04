const express = require('express');
const router = express.Router();
const User = require('../../Models/User')
const authUser = require('../../Middleware/authUser')

router.post('/:id', authUser, async (req, res) => {
    if (!req.params.id){
       res.json({error: 'enter valid id'}) 
    } else {
        if (res.token.user != req.params.id){
            res.status(401).json({error: "unauthorised"})
        } else {
            try {
                const user = await User.findById(res.token.user)
                const userr = await user.deleteOne()
                res.status(200).json({message: "successfully deleted user"})
            } catch (err) {
                res.json(err)
            }
        }

    }

});

module.exports = router;