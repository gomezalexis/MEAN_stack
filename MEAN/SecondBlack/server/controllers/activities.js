var mongoose =require('mongoose');
var random = require('mongoose-query-random');

var Activity = mongoose.model("Activity");
var User = mongoose.model("User");

module.exports = {

    test: function(req, res){
        res.json({test: 'bicycle success'})
    },

    create: function(req,res){
        console.log("Data in create " + req.body);
        User.findOne({email: req.session.user.email}, function(err,user){
            var activity = new Activity(req.body);
            activity._creator = user._id;
            activity._tagged = req.body.tagged;
            activity.done = false;
            user.activities.push(activity);

            activity.save(function(err){
                user.save(function(err){
                    if(err){
                        console.log("error in the save")
                        res.json({error: "Something not right: " + err})
                    } else{
                        console.log("Succesfully added activity")
                        res.json({success: "Activity added succesfully"})
                    }
                })    
            })
        })
    },

    showUserActivities: function(req,res){
        Activity.find({_creator: req.session.user._id}, function(err, activities){
            res.json(activities);
        })
    },

    getThirdActivities: function(req,res){
        Activity.find({_creator: req.params.id}, function(err, activity){
            if(err){
                res.json({error: 'There was an error getting third activities'})
            } else{
                console.log(activity);
                res.json(activity)
            }
        })
    },

    updateActivity: function(req,res){
        var query = {_id: req.params.id};
        Activity.update(query, req.body, function(err){
            if(err){
                console.log("There was an error updatid");
                res.json({error: "Something not right: " + err})
            } else{
                console.log("update succesfull")
                res.json({success: "Activity updated succesfully"})
            }
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