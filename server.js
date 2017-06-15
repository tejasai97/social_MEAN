var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app=express();

mongoose.connect("mongodb://root:root@ds127872.mlab.com:27872/time-waste");


app.use('/app',express.static(__dirname+ "/app"));
app.use('/node_modules',express.static(__dirname + "/node_modules"));


app.get('/',function(req,res){
  res.sendfile('index.html');
});

app.listen('4000',function(){
  console.log("Listening for local host 3000");
});
