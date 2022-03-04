const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

//log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();

//parse request to body-Parser
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set("view engine", "ejs")
// app.set("views",path.resolve(__dirname, 'views/<foldername>'))  
//if we put all the ejs in viewa folder we don't have to say it but if u make a folder in views and store it there then we have to say it

//load assets
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img',express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,() => {console.log(`Server is running on http://localhost:${PORT}`)});