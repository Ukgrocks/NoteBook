const connectToMongo = require('./db'); //mongo connection established
var cors = require('cors')
connectToMongo(); //calling connectToMongo
const express = require('express') // importing express
const app = express() //making app as alias of express keyword
const port = 5000 //port number on local host on which we want to listen


app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth')) 
app.use('/api/notes',require('./routes/notes')) 
/*This line says use url (localhost:port_number/api/auth) to execute javascriot code written in auth.js file 
in routes folder*/


app.get('/', (req, res) => {
  res.send('Hello Home !')
})


// app.get('/v1/login', (req, res) => {
//   res.send('Hello Login!')
// })

// app.get('/v1/signup', (req, res) => {
//   res.send('Hello SignUP!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

