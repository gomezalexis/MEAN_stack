var mongoose = require('mongoose');
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

// Require controlers file
var messages = require('../controllers/messages.js')
var comments = require('../controllers/comments.js')

//Root request && routes
module.exports = function(app){

    app.get('/', function(req,res){
        messages.index(req,res);
    })

    app.post('/messages', function(req,res){
        messages.create(req,res);
    })

    app.post('/comments/:id', function(req,res){
        comments.create(req,res);
    })
}