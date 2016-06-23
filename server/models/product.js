var mongoose = require('mongoose');

//Schema
var productSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})

// register schema as a model
var Product = mongoose.model('Product', productSchema);
