var express = require('express')

var app = express()

app.set('port', (process.env.PORT  || 5000));

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){

	res.send("Heroku working !");
});

app.get('/test', function(req,res){

	res.send("It is working !");
});

app.listen(app.get('port'));

console.log('Server running !');