const mongoose = require('mongoose');

//* Global Configuration
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection;

module.exports = function() {
    //* Connection to MongoDB
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

    //* Listens for error on connection
    db.on('error', (error) => console.error(error))
    db.on('open', () => console.log('Connected to MongoDB'))
    db.on('close', () => console.log('MongoDB disconnected'))
}