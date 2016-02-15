var express = require('express');
var app = express();

var monte = {name: 'monte',id: '1',age: '32',gender: 'male'};
var smokey = {name: 'smokey',id: '2',age: '80',gender: 'male'};
var winnie = {name: 'winni',id: '3',age: '100',gender: 'male'};

var bears = [monte,smokey,winnie];

app.get('/api/bears', function(req, res) {
	res.json(bears);
});


app.listen(3000, function() {
	console.log('the server is up and running..')
});

