var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app=express();

mongoose.connection("mongodb://root:root@ds127872.mlab.com:27872/time-waste");

app.get('/',function(req,res){
  res.sendfile('index.html');
});

app.listen('3000',function(){
  console.log("Listening for local host 3000");
});
