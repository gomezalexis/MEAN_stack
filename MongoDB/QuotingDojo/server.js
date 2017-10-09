// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Requiring mongoose
var mongoose = require('mongoose');
//making the database in mongodb
mongoose.connect('mongodb://localhost/dojo_quotes');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 5},
    quote:{type: String, required: true, maxlength: 255, minlength: 5},
    time: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.set('view engine', 'ejs');

//Root request
app.get('/', function(req,res){
    res.render('index');
})

app.get('/quotes', function(req,res){
    Quote.find({},null,{sort:{time: -1}}, function(error, quotes){
        if(error){
            console.log("ERRORS");
            console.log(error);
        } else{
            console.log("QUOTES");
            console.log(quotes);
        }
        res.render('quotes', {quotes: quotes});
    });
})

app.post('/quotes', function(req,res){
    console.log("POST DATA", req.body);
    var quote = new Quote({
        name: req.body.name,
        quote: req.body.theQuote,
    });
    quote.save(function(err){
        if(err){
            res.render('error', {errors: quote.errors});
        } else{
            console.log('succesfully added a user!');
            res.redirect('/quotes');
        }
    })
})

//always last
app.listen(8000, function() {
    console.log("listening on port 8000");
})
