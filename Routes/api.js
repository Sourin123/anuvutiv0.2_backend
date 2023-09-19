var express = require('express');
var router = express.Router();
var BookModule = require("../models/book.modules")


/* GET users listing. */
router.get('/', function(req, res, next) {
    var main = async () =>{
      try {
        var data = await BookModule.find({});
        var getAllBooks ={
          data : data
        }
        
        res.json(getAllBooks)
      } catch (error) {
        console.log(error);
      }
       
    }
  main();
});

module.exports = router;
