const express = require('express');
const app = express()


app.use('/create', require('./create'));
app.use('/update', require('./update'));
app.use('/delete', require('./delete'));
app.use('/login', require('./login'));

module.exports = app