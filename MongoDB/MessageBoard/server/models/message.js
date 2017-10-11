var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    theMessage: {type: String, required: true, minlength: 3, maxlength: 300},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

mongoose.model('Message', messageSchema);