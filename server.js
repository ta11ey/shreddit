/// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');





var app = express();
app.use(express.static(__dirname + '/public'));
app.use(cors());


/////////////////
///Local Auth///
///////////////no


var mongoURI = 'mongodb://localhost:27017/Shreddit';

var port = process.env.PORT || 8080;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
});

app.listen(port, function() {
  console.log('Listening on port '+ port);
});
