var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new mongoose.Schema({
    
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    _tagged: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true, minlength: 5, maxlength: 30},
    description: {type: String, required: true, maxlength: 200, minlength: 10},
    done: {type: Boolean},

},{ timestamps: true});

mongoose.model('Activity', ActivitySchema);