require('dotenv').config(); // call and configure your dotenv package
const express = require('express')
const connectToDB = require('./config/database')


const port = 3000
const app = express()

const Flight = require('./models/Flight')

// ==== Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//* settling a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url);
    next()
})
//* parses the data from the request
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flights:allFlights})
    })
    })

 //* Post method (accept data from the form)
app.post('/flights', (req, res) => {
    console.log(req.body);

    Flight.create(req.body, (error, createdFlights) => {
        // res.send(createdFlights)
        res.redirect('/flights')
    })
})  

app.get('/flights/new', (req, res) => {
res.render('New')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectToDB()
})
//   mongoose.set('strictQuery', true)
//   mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlPArser: true, 
//     useUnifiedTopology: true,
//   })
//   mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB!')
//   })
// })