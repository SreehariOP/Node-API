
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute')
const error = require('mongoose/lib/error');
const dotenv = require('dotenv');
// const port = 3000;
const cors = require('cors')
require('dotenv').config()
const errorMiddleware = require('./middleware/errorMiddleware')
app.use(express.json())
app.use(express.urlencoded({extended: false}))  //form instead of json

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use('/api/products',productRoute);
app.use(errorMiddleware)
app.use(cors(corsOptions))

app.listen(process.env.PORT, () => console.log(`server running on PORT ${process.env.PORT}`))
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() =>console.log("Mongo DB Connected")).catch((err) => console.log("db not connected",err));


app.get('/', (req, res) => {

    res.send('NODE API')
})

app.get('/about', (req, res) => {
  res.send('Sreehari')
})






