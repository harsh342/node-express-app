var Express = require("express");
var chalk = require("chalk");
var debug = require("debug")("app");
var morgan = require("morgan");
var path = require("path");

var express = new Express();

express.use(morgan("tiny"));

express.get("/",function(req,res){
   res.sendFile(path.join(__dirname,"views","Index.html")); 
});

express.listen(process.env.PORT,process.env.IP,function(){
    debug(`Server is running on port ${chalk.green(process.env.PORT)}`);
});