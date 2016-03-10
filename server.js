var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.send('hello world!');
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});

app.use(express.static('dist/'));