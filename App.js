require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
var cors = require("cors")
var indexRouter = require("./Routes/index")
var apiRouter = require("./Routes/api")
var port = process.env.PORT;
const corsOptions= {
origin: "*" ,
credentials: true,
optionSuccessStatus : 200 
}

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));


app.use('/',indexRouter);
app.use('/api',apiRouter)

app.listen(port ,()=>{
    console.log("connection successful at port: %d",port);
})