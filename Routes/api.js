var express = require('express');
var router = express.Router();
var BookModule = require("../models/book.modules")


/* GET users listing. */
router.get('/', function(req, res, next) {
    var main = async () =>{
        var data = await BookModule.find({});
        
        res.json(data)
    }
  main();
});

module.exports = router;
