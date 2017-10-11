var mongoose = require('mongoose');
var Comment = mongoose.model("Comment");
var Message = mongoose.model("Message")
module.exports = {

    create: function(req,res){
        console.log("POST DATA", req.body);
        Message.findOne({_id: req.params.id}, function(err, message){
            var comment = new Comment(req.body);
            comment._message = message._id;
            message.comments.push(comment);
            comment.save(function(err){
                message.save(function(err){
                    if(err) { console.log('Error');}
                    else { res.redirect('/');}
                })
            })
        })
    },
}