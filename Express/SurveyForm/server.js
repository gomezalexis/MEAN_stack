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

   res.render('index'); 
})

app.post('/result', function(req,res){
    console.log("POST DATA \n\n", req.body);
    req.session.student = req.body;
    res.redirect('/result');
})

app.get('/result', function(req,res){

    res.render('result', {student: req.session.student});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})