var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true, minlength: 2},
    theComment: {type: String, required: true, minlength: 3, maxlength: 300},
}, {timestamps: true});

mongoose.model('Comment', commentSchema);