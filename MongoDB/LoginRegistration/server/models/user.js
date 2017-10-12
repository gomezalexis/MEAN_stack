var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstName: {type: String, trim: true, required: true, minlength: 2},
    lastName: {type: String, trim: true, required: true, minlength: 2},
    birthday: {type: Date, required: true},
    email: {
        type: String, 
        required: true, 
        unique: true, 
        minlength: 6,
        validate: {
            validator: function(value){
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);

            },
            message: "Invalid email format."
        }
    },
    password: {
        type: String, 
        required: true, 
        minlength: 6,
        maxlength: 20,
        validate: {
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character",
        }    
    },
},{timestamps: true});


userSchema.pre('save', function(callback){
    // Hash before saving
    var hashed = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
    this.password = hashed;

    callback();
});


mongoose.model('User', userSchema);