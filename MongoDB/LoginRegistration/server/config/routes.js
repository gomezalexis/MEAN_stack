var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/users.js');
//Root request && routes
module.exports = function(app){

    app.get('/', function(req,res){
        // if not talking database leave it here
        res.render('index');
    })

    app.post('/user/create', function(req,res){
        users.create(req, res);
    })

    app.get('/welcome', function(req,res){
        users.welcome(req,res);
    })

    app.post('/user/login', function(req,res){
        users.login(req,res);
    })

    app.post('/user/logout', function(req,res){
        users.logout(req,res);
    })
}
