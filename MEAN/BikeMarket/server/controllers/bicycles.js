var mongoose =require('mongoose');
var random = require('mongoose-query-random');

var Bicycle = mongoose.model("Bicycle");
var User = mongoose.model("User");

module.exports = {

    test: function(req, res){
        res.json({test: 'bicycle success'})
    },

    create: function(req,res){
        console.log("Data in create ");
        User.findOne({email: req.session.user.email}, function(err,user){
            var bicycle = new Bicycle(req.body);
            bicycle._user = user._id;
            user.bicycles.push(bicycle);

            bicycle.save(function(err){
                user.save(function(err){
                    if(err){
                        console.log("error in the save")
                        res.json({error: "Something not right: " + err})
                    } else{
                        console.log("Succesfully added bike")
                        res.json({success: "Bicycle added succesfully"})
                    }
                })    
            })
        })
    },

    updateBike: function(req,res){
        console.log("POST DATA UPDATING..: ", req.body);
        var query = {_id: req.params.id};
        Bicycle.update(query, req.body,function(err){
            if(err){
                console.log("There was an error updatid");
                res.json({error: "Something not right: " + err})
            } else{
                console.log("update succesfull")
                res.json({success: "Bicycle updated succesfully"})
            }
        })


    },

    showAll: function(req,res){
        Bicycle.find({}, function(req, bicycles){
            res.json(bicycles)
        })
    },

    showUserBicycles: function(req,res){
        console.log("the id: " + req.session.user._id)
        Bicycle.find({_user: req.session.user._id },function(err,bikes){
            res.json(bikes)
        })
    },

    getRandomBike: function(req,res){
        console.log("getting random bicycle")
        Bicycle.find().random(1, false, function(err, bike){
            res.json(bike)
        })
    },

    show: function(req,res){
        console.log("going to show a bicycle")
        Bicycle.findOne({_id: req.params.id}, function(err, bicycle){
            if(err){
                console.log("errer: " + err);
            } else{
                res.json(bicycle)
            }
        })
    },

    deleteBike: function(req,res){
        console.log("Deleting bike: " + req.params.id)
        Bicycle.remove({_id: req.params.id}, function(err, bicycle){
            if(err){
                res.json({error: 'There was an error deleting'})
            } else{
                res.json({success: 'User deleted'})
            }
        })
    }
}