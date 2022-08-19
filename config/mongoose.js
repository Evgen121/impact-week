const mongoose = require('mongoose');
// db connection
const db = "mongodb+srv://user:user123@cluster0.2o8iby9.mongodb.net/Question?retryWrites=true&w=majority"
mongoose.connect(db)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))