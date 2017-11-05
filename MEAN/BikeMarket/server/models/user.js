var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 2},
    lastName: {type: String, required: true, minlength: 2},
    email: {type: String, required: true, minlength: 5},
    password: {type: String, required: true, minlength: 6},
    bicycles: [{type: Schema.Types.ObjectId, ref: 'Bicycle'}],
}, {timestamps: true});

mongoose.model('User', UserSchema);