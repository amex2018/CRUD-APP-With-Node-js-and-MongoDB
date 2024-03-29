const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');
const app =  express();

dotenv.config({path:'config.env'});

const Port= process.env.PORT || 3000;
// log request
app.use(morgan('tiny'));


// database connection
connectDB();

// parser request to body-parser
app.use(express.urlencoded({extended: true}));

// set view engine 
app.set("view engine", "ejs")

// load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.use('/', require('./server/routes/router'));

app.listen(Port, ()=>{
    console.log('server running in http://localhost:3000')
})