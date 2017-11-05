// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var path = require('path');
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));

var mongoose = require('mongoose');


// app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, '/frontEnd/dist'))); 

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));

app.set('view engine', 'ejs');

//Require mongoose config file
require('./server/config/mongoose.js');

//Require all 
var routesSetter = require('./server/config/routes.js');

//Pass app into routesfil
routesSetter(app);

// Root Request && Routes were here 


//always last
app.listen(8000, function() {
    console.log("listening on port 8000");
})
