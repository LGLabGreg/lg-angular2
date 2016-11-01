const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});