const express = require('express');
const app = express()


app.use('/fetch', require('./fetch'));
app.use('/create', require('./create'));
app.use('/update', require('./update'));
app.use('/delete', require('./delete'));

module.exports = app