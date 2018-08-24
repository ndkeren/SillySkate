// Init
var express	= require('express');
var app		= express();
var routes	= require('./routes');

// Start
app.use('/', routes);
app.listen(8080);
