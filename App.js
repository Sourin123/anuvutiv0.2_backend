require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
var indexRouter = require("./Routes/index")
var apiRouter = require("./Routes/api")
var port = process.env.PORT;

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',indexRouter);
app.use('/api',apiRouter)

app.listen(port ,()=>{
    console.log("connection succesful at port: %d",port);
})