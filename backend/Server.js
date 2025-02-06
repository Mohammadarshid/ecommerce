const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectdb = require('./config/db')
// rest  object

dotenv.config()




// db connection
connectdb()


const app = express()
// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


// route
app.use("/api/v1/test", require("./routes/testroute"));
app.use('/api/v1/auth', require('./routes/authroute'))
app.use("/api/v1/user", require('./routes/userroute'))
app.use("/api/v1/productcreate", require('./routes/productroute'))



app.get('/', (req, res) => {
    return res.status(200).send("<h1> Welcome to Management Application </h1>")
    
}) 

const PORT = process.env.PORT || 8080;


// listen

app.listen(PORT, () => {
    console.log ( `Server running on ${PORT}`.bgYellow);
    
})
