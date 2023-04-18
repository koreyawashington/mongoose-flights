const mongoose = require('mongoose');

//Mongoose Flight schema
const flightSchema = new mongoose.Schema({
airline: {type: String, enum: ['American', 'Southwest', 'United'], required: true },
flightNo: {type: Number, required: true, min: 10, max: 9999},
departs: {type: Date, required: true, default: Date.now}
 
}, {timestamps: true})

//mongoose model                      
const Flight = mongoose.model('Flight', flightSchema);

// module.exports = Flight;

// const mongoose = require('mongoose');

// const flightSchema = new mongoose.Schema({
//     airline: {
//         type: String,
//         enum: ['American', 'Southwest', 'United', 'Delta', 'Allegiant']
//     },
//     flightNo: {
//         type: Number,
//         min: 10,
//         max: 9999
//     },
//     departs: Date
// })

// const Flight = mongoose.model('Flight', flightSchema)
// module.exports = Flight;
