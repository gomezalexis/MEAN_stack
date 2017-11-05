var mongoose =require('mongoose');

var User = mongoose.model("User");

// Export file as an object
module.exports = {

    test: function(req,res){
        res.json({test: 'success'})
    },

    create: function(req,res){
        console.log("POST DATA aqui", req.body);
        var user = new User(req.body);
        User.findOne({email: user.email})
        .then(function(match){
            if(match){
                console.log("email already exist in database")
                res.json({error: "Email already exist in database"})

            } else{
                user.save(function(err){
                    if(err){
                        console.log("in the error save")
                        res.json({errors: user.errors});
                    } else{
                        console.log("Succesfully added user")
                        req.session.user = req.body;
                        console.log("The email of the session is : " + req.session.user.email);
                        res.json({success: "Welcome"})
                    }
                    // adding new notes
                })
            }
        })
                   
        
    },

    retrieve: function(req,res){
        console.log("POST DATA retrieving", req.body)
        User.findOne({email: req.body.userEmail})
        .then(function(match){
            if(match.password === req.body.userPassword){
                req.session.user = match;
                res.json({success: "Welcome back"})
            }
            else{
                res.json({fail: "Password didn't match"})
            }
        })
        .catch(function(error){
            console.log("Email not in database");
            res.json({fail: "Email not in database"})
        })
    },

    dashboard: function(req,res){
        if(req.session.user){
            User.findOne({email: req.session.user.email}, function(error,user){
                if(error){
                    console.log("error: " + err);
                } else{
                    req.session.user = user;
                    res.json(user);
                }
            })
            
        }
    },

    getContact: function(req,res){
        console.log("getting Contact in controller: " + req.params.id)
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){
                res.json({error: 'There was an error deleting'})
            } else{
                console.log(user);
                res.json(user)
            }
        })
    },

    


}