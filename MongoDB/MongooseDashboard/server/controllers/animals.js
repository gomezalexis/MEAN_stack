//Controller talks to database
var mongoose = require('mongoose');
var Animal = mongoose.model("Animal");

// export file as an object
module.exports = {
    index: function(req, res){
        Animal.find({}, function(error, animals){
            res.render('index', {animals: animals});
        });
    },

    create: function(req, res){
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
    },

    show: function(req,res){
        console.log('The id is ' + req.params.id);
        Animal.findById(req.params.id, function(error, animal){
            res.render('animal', {animal: animal});
        });
    },

    edit: function(req,res){
        Animal.findById(req.params.id, function(error, animal){
            res.render('edit', {animal: animal});
        });
    },

    update: function(req, res){
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
    },

    destroy: function(req, res){
        console.log("POST DATA", req.body);
        Animal.findByIdAndRemove(req.params.id,function(error,animal){
            console.log("succesfully removed Animal");
            res.redirect('/');
        })
    },
}