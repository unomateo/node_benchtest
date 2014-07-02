var express = require('express');
var fs = require('fs');
 
var app = express();
var res;
 
app.get("/", function(req,res){
    var result = [];
    fs.readFile('acronyms.txt', 'utf8', function (err,data) {
    if (err) throw err;

        var array = data.toString().split("\r\n");
        for (i = 0; i < 20; i++) { 
            var val = array[Math.floor(Math.random() * ((array.length - 1) - 0 + 1))];
            var str = val.split(" - ");
            result.push({"key":str[0], "value":str[1]});
           
        }

        res.contentType('application/json');
        res.send(result);
    });
    
});
 
app.listen(3000);
console.log('Listening on port 3000...');
