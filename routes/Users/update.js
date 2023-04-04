const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('yea working')
});

module.exports = router;