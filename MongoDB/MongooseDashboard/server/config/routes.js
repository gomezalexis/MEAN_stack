var mongoose = require('mongoose');
var Animal = mongoose.model("Animal");

// Require controllers file
var animals = require('../controllers/animals.js')

// Root Request && Routes
module.exports = function(app){

    app.get('/', function(req,res){
        // call function in matching controller key
        animals.index(req,res);
    })

    app.get('/mongooses/new', function(req,res){
        // if not talking database leave it here
        res.render('addnew');
    })

    app.post('/mongooses', function(req,res){
        animals.create(req,res);
    })

    app.get('/mongooses/:id', function(req, res){
        
        animals.show(req,res);
    })

    app.get('/mongooses/edit/:id', function(req, res){
        // Ani
        animals.edit(req, res);
    })

    app.post('/mongooses/:id', function(req,res){
        animals.update(res,res);
    })

    app.post('/mongooses/destroy/:id', function(req,res){
        animals.destroy(req,res);
    })
}