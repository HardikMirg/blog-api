require('dotenv').config()
const express = require('express');
const dbconnect = require('./db');

// get environment variables
const PORT = process.env.PORT;
const db_uri = process.env.DB_URI;

// connect to database
dbconnect(db_uri);

// set up expressjs
const app = express();
app.use(express.json())

// Routes Setup
app.get('/', (req, res) => {
    res.send(':(')
})
app.use('/api/blogs', require('./routes/Blogs/Blogs'))
app.use('/api/users', require('./routes/Users/Users'))

app.listen(PORT, () => {console.log(`express app listening at ${PORT}`)});