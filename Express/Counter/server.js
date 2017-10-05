// always first load the express module
var express = require("express");
// Cause we are going to use session
var session = require('express-session');
var path = require("path");
// invoking the var express and the result would be store in app
var app = express();
// Lets bring the body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'})); // string to ecryption
// telling the server to use our static folder
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
// set the view engine itself so that express knows that we are using ejs 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    req.session.counter += 1;
   res.render('index', {counter: req.session.counter}); 
})

app.post('/addtwo', function(req,res){
    req.session.counter += 1;
    res.redirect('/');
})

app.post('/reset', function(req,res){
    req.session.counter = 0;

    res.redirect('/');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})


