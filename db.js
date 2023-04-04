const mongoose = require('mongoose');

const dbconnect = (URI) => {
    mongoose.connect(URI).then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = dbconnect;