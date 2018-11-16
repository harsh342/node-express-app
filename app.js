var Express = require("express");
var chalk = require("chalk");
var debug = require("debug")("app");


var express = new Express();

express.get("/",function(req,res){
   res.send("This is an Express Library App!!") 
});

express.listen(process.env.PORT,process.env.IP,function(){
    debug(`Server is running on port ${chalk.green(process.env.PORT)}`);
});