/**
 * This file is based on Facebook's version of server.js, included in the
 * download for this tutorial: https://facebook.github.io/react/docs/tutorial.html
 */
//These lines below create objects that will load the libraries required to 
//make these pages function.
'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//This lines sets the port the program will listen on
app.set('port', (process.env.PORT || 3000));

//This allows the app to use the directory named public, the / tells the program
//to start in that folder when the program runs.
app.use('/', express.static(path.join(__dirname, 'public')));
//These 2 lines allow us to use the bodyParser library with json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//This will actually start the app and get it to listen on the port we give it.
app.listen(app.get('port'), function() {
  //Just outputs that the server has started and the port number to the console.
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
