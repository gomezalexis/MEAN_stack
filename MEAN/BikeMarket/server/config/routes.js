var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bicycle = mongoose.model('Bicycle');

//Require controllers file
var users = require('../controllers/users.js');
var bicycles = require('../controllers/bicycles.js');

//Root request && Routes
module.exports = function(app){

    app.get('/api/test', function(req,res){
        users.test(req,res);
    })

    app.get('/bike/test', function(req,res){
        console.log("in the routes")
        bicycles.test(req,res);
    })
    
    app.post('/user/create', function(req, res){
        // console.log("POST DATA", req.body);
        users.create(req,res);

    })

    app.post('/bicycle/create', function(req,res){
        bicycles.create(req,res);
    })

    app.post('/user/retrieve', function(req,res){
        console.log("Routes ",req.body);
        users.retrieve(req,res);
    })

    app.get('/get/user/bikes', function(req,res){
        bicycles.showUserBicycles(req,res);
    })

    app.get('/browse', function(req, res){
        console.log("showing all bikes")
        bicycles.showAll(req,res);
    })

    app.get('/get/random/bike', function(req, res){
        console.log("get random bike")
        bicycles.getRandomBike(req,res);
    })

    app.get('/get/dashboard',function(req,res){
        users.dashboard(req,res);
    }) 

    app.get('/bicycle/delete/:id', function(req,res){
        bicycles.deleteBike(req,res);
    })

    app.get('/contact/:id', function(req,res){
        users.getContact(req,res);
    })

    app.get('/bicycle/show/:id', function(req,res){
        bicycles.show(req,res);
    })

    app.post('/bicycle/update/:id', function(req,res){
        bicycles.updateBike(req,res);
    })

    // app.get('/browse', function(req,res){
    //     users.dashboard(req,res);
    // })
    
    //the last one
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./frontEnd/dist/index.html"))
    })
}