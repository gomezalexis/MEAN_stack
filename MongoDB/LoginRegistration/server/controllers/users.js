var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
// var session = require('express-session');

//export file as an object
module.exports = {

    create: function(req,res){
        console.log("POST DATA", req.body);
        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            email: req.body.email,
            password: req.body.password,

        });
        if(req.body.password === req.body.passwordConfirm){
            user.save(function(err){
                if(err){
                    res.render('error', {errors: user.errors});
                }else{
                    console.log('Succesfully added user');
                    req.session.user = req.body;
                    console.log(req.session.user.email);
                    res.redirect('/welcome');
                }
            })
        } else{
            console.log("------------");
            console.log("Password don't match");
            console.log("------------");
        }
    },

    welcome: function(req,res){
        console.log("The email is: " + req.session.email);        
        res.render('welcome', {user: req.session.user});
    },

    login: function(req,res){
        console.log("POST DATA", req.body);

        User.findOne({email: req.body.email})
        .then(function(user){
            bcrypt.compare(req.body.password, user.password)
            .then(function(match){
                if(match){
                    console.log("Password match");
                    req.session.user = user;
                    res.redirect('/welcome');
                } else{
                    console.log("--------");
                    console.log("Password does not match");
                    res.redirect('/');
                }
            });
        })
        .catch(function(error){
            console.log("Email does not exist");
            console.error(error);
            res.redirect('/');
        })
    },

    logout: function(req,res){
        req.session.user = "";
        console.log("Succesfully log out")
        res.redirect('/');
    }
}