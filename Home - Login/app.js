var express = require('express');
var path = require('path');
var app = express();

app.get('/',function(require,response){
    response.sendFile('index.html',{root: path.join(__dirname,'./')});
});

app.listen(1337,function(){
    console.log("Listening at port 1337");
});