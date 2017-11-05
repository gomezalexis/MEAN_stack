var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BicycleSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true, minlength: 2, maxlength: 30},
    description: {type: String, required: true, maxlength: 200, minlength: 2},
    price: {type: Number, required: true, min: 1},
    location: {type: String, required: true},
},{ timestamps: true});

mongoose.model('Bicycle', BicycleSchema);