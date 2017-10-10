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
mongoose.connect('mongodb://localhost/animal_dashboard');

var AnimalSchema = new mongoose.Schema({
    theAnimal: {type: String, required: true, minlength: 1},
    class: {type: String, required: true},
    lifespan: {type: Number, required: true, max: 170, min: 0}
}, {timestamps: true});

mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model("Animal");

app.set('view engine', 'ejs');

// Root Request && Routes
app.get('/', function(req,res){
    Animal.find({}, function(error, animals){
        res.render('index', {animals: animals});
    });
})

app.get('/mongooses/new', function(req,res){
    res.render('addnew');
})

app.post('/mongooses', function(req,res){
    console.log("POST DATA", req.body);
    var animal = new Animal({
        theAnimal: req.body.theAnimal,
        class: req.body.class,
        lifespan: req.body.lifespan,
    });
    animal.save(function(err){
        if(err){
            res.render('error', {errors: animal.errors});
        } else {
            console.log('Succesfully added Animal');
            res.redirect('/');
        }
    })
})

app.get('/mongooses/:id', function(req, res){
    console.log('The id is ' + req.params.id);
    Animal.findById(req.params.id, function(error, animal){
        res.render('animal', {animal: animal});
    });
})

app.get('/mongooses/edit/:id', function(req, res){
    Animal.findById(req.params.id, function(error, animal){
        res.render('edit', {animal: animal});
    });
})

app.post('/mongooses/:id', function(req,res){
    console.log("POST DATA", req.body);
    Animal.findById(req.params.id, function(error,animal){
        animal.class = req.body.class;
        animal.lifespan = req.body.lifespan;
        animal.save(function(err, updatedAnimal){
            if(err){
                res.render('error', {errors: animal.errors});
            } else{
                console.log('Succesfully updated Animal');
                res.redirect('/');
            }
        })
    })
})

app.post('/mongooses/destroy/:id', function(req,res){
    console.log("POST DATA", req.body);
    Animal.findByIdAndRemove(req.params.id,function(error,animal){
        console.log("succesfully removed Animal");
        res.redirect('/');
    })

})


//always last
app.listen(8000, function() {
    console.log("listening on port 8000");
})
