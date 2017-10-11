var mongoose = require('mongoose');
//If association between 2 models, require necessary models

// Each file in the models folder should have a different schema
var AnimalSchema = new mongoose.Schema({
    theAnimal: {type: String, required: true, minlength: 1},
    class: {type: String, required: true},
    lifespan: {type: Number, required: true, max: 170, min: 0}
}, {timestamps: true});

mongoose.model('Animal', AnimalSchema);