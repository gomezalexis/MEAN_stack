// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
var session = require('express-session');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

app.use(session({secret: 'codingdojorocks'}));
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
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