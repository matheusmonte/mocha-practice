var express = require('express');
var app = express();
var converter = require("./converter");

const bodyParser= require('body-parser');

app.get("/rgbToHex", function(req, res){
    let red   = parseInt(req.query.red, 10);
    let green = parseInt(req.query.green, 10);
    let blue  = parseInt(req.query.blue, 10);
  
    var hex = converter.rgbToHex(red, green, blue);
  
    res.send(hex);
});

app.get("/hexToRgb", function(req, res){
    let hex = req.query.hex;

    let rgb = converter.hexToRgb(hex);
  
    res.send(JSON.stringify(rgb));
});

app.post('/quotes', (req, res) => {
    console.log('Hello');
});

app.listen(3000, function() {
    console.log('listenning 3000');
});