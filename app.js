const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

//const {logger} = require('./src/utils/logger')

const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const morgan = require('morgan')
const indexRoute = require('./src/routes/index');



app.use(morgan('combined'))
app.use(bodyParser.json())


app.use('/api', indexRoute)




app.listen(port, ()=>{
    
    
    console.log('listening on port', `${port}`)
})