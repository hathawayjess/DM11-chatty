var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var messages = [
	{ 
	  message: "Hi there!",
	  time: "11:11am"
    }
];


app.get('/', function(req, res) {
	res.status(200).set({
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	    'X-XSS-Protection': '1; mode=block',
	    'X-Frame-Options': 'SAMEORIGIN',
	    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  	}).send(JSON.stringify(messages));
})

app.post('/', function(req, res) {

	console.log(req.body);

	messages.push({
		username: req.body.username,
		message: req.body.message,
		time: new Date()
	});

	res.status(200).set({
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	    'X-XSS-Protection': '1; mode=block',
	    'X-Frame-Options': 'SAMEORIGIN',
	    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send(JSON.stringify(messages));
})

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});



app.listen(3000);