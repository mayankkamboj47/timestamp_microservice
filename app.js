var express = require('express')
var datemodule = require('./module.js')
var app = express();
app.get('/',function(req,res){
res.send('date api');
});
app.use(function(req,res){
var x = decodeURIComponent(req.path.substring(1));
if(x!='')
res.json(datemodule(x));
});
app.listen(3000);
