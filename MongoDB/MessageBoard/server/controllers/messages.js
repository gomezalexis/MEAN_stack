var mongoose = require('mongoose');
var Message = mongoose.model("Message");

//export file as an object
module.exports = {
    index: function(req,res){
        Message.find({})
        .populate('comments')
        .exec(function(error, messages){
            res.render('index', {messages: messages});
        });
    },

    create: function(req,res){
        console.log("POST DATA", req.body);
        var message = new Message({
            name: req.body.name,
            theMessage: req.body.theMessage,

        });
        message.save(function(err){
            if(err){
                res.render('error', {errors: message.errors});
            } else{
                console.log('Succesfully added message');
                res.redirect('/');
            }
        })
    },

}