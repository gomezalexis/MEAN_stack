var mongoose = require('mongoose');
var User = mongoose.model('User');
var Activity = mongoose.model("Activity");

//Require controllers file
var users = require('../controllers/users.js');
var activities = require('../controllers/activities.js');

module.exports = function(app){

    app.get('/api/test', function(req,res){
        users.test(req,res);
    })

    app.post('/user/create', function(req, res){
        // console.log("POST DATA", req.body);
        users.create(req,res);
    })

    app.post('/user/retrieve', function(req,res){
        console.log("Routes ",req.body);
        users.retrieve(req,res);
    })

    app.get('/get/dashboard',function(req,res){
        users.dashboard(req,res);
    })

    app.get('/allusers', function(req,res){
        users.getAllUsers(req,res);
    })

    app.post('/newactivity', function(req,res){
        activities.create(req,res);
    })

    app.get('/getthird/:id', function(req,res){
        users.getThirdUser(req,res);
    })

    app.get('/thirdactivities/:id', function(req,res){
        activities.getThirdActivities(req,res);
    })

    app.get('/theuser/activities', function(req,res){
        activities.showUserActivities(req,res);
    })

    app.post('/activity/update/:id', function(req,res){
        activities.updateActivity(req,res);
    })


    // app.post('/question/save', function(req,res){
    //     questions.create(req,res);
    // })

    // app.get('/testquestions', function(req,res){
    //     questions.getRandom(req,res);
    // })
    
    

    // app.get('/browse', function(req,res){
    //     users.dashboard(req,res);
    // })
    
    //the last one
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./frontEnd/dist/index.html"))
    })
}