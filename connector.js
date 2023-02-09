const mongodb = require('mongodb');


// This is the MongoDB Cloud Atlas link to connect our backend with the database
const mongoURI = "mongodb+srv://Vishal258000:Vishal@258000@cluster0.i5cdbuz.mongodb.net/bookmyshow"

let mongoose = require('mongoose');
const { bookMovieSchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)


exports.connection = collection_connection;




