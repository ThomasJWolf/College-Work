/**
 * This file is based on Facebook's version of server.js, included in the
 * download for this tutorial: https://facebook.github.io/react/docs/tutorial.html
 */
//These lines below create objects that will load the libraries required to 
//make these pages function.
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//This creates a link to the donations.json file we will use and then allows us to access
//that file through the DONATIONS_FILE variable
var DONATIONS_FILE = path.join(__dirname, 'donations.json');

//This lines sets the port the program will listen on
app.set('port', (process.env.PORT || 3000));

//This allows the app to use the directory named public, the / tells the program
//to start in that folder when the program runs.
app.use('/', express.static(path.join(__dirname, 'public')));
//These 2 lines allow us to use the bodyParser library with json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//This creates a function named api/donations that we can access from the js pages we create
//Since we are using get, it will only allow us to get information
app.get('/api/donations', function(req, res) {
  //This line is going to allow us to read information from the DONATIONS_FILE, and 
  //then either throw an error or give us data.
  fs.readFile(DONATIONS_FILE, function(err, data) {
    //If there is an error, it will send the error to the console.
    if (err) {
      console.error(err);
      process.exit(1);
    }
    //If there is not an error, the data will be parsed as json in the res variable
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

//This creates a function named api/donations that we can access from the js pages we create
//Since we are using post, it will only allow us to send information
app.post('/api/donations', function(req, res) {
  //This line is going to allow us to get information from the DONATIONS_FILE, and 
  //then either throw an error or give us data.
  fs.readFile(DONATIONS_FILE, function(err, data) {
    //If there is an error, it will send the error to the console.
    if (err) {
      console.error(err);
      process.exit(1);
    }
    //If there is not an error, we will create a variable that will hold the information
    //we passed from the html pages.
    var donations = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.

    //This creates an array that will hold all the information we grabbed from the html
    //page in a json format, with a field name and then data after the :
    var newDonation = {
      id: Date.now(),
      contributor: req.body.contributor,
      amount: req.body.amount,
      comment: req.body.comment,
      department: req.body.department
    };
    //This line pushed the newDonation array information into the donations variable
      donations.push(newDonation);
     
    //This line will write the information, with us telling it the name of the file to 
    //write to, that is it JSON information from the donations variable, and that there
    //will be 5 fields in the JSON file.
    fs.writeFile(DONATIONS_FILE, JSON.stringify(donations, null, 5), function(err) {
      //If it creates an error, it will tell us that error.
      if (err) {
        console.error(err);
        process.exit(1);
      }
      //If there is not an error, it will give results in json format from the donations object
      res.setHeader('Cache-Control', 'no-cache');
      res.json(donations);
    });
  });
});

//This will actually start the app and get it to listen on the port we give it.
app.listen(app.get('port'), function() {
  //Just outputs that the server has started and the port number to the console.
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
