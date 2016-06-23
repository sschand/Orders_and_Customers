var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    // Display all of the persons
    showAll: function(req, res) {
        Product.find({}, function(err, Products){
            if(err){
                console.log('something went wrong retrieving Products');
            }else {
                res.json({Products: Products});
            }
        })
    },

    // Create a new document on an Person
    addProduct: function(req, res){
        var product = new Product({name: req.params.name});
        product.save(function(err){
            if(err){
                console.log('something went wrong');
            }else {
                res.redirect('/');
            }
        })
    },
    // Display information about one Person
    showOne: function(req, res){
        // Person.findOne({_id: req.params.name}, function(err, person){
        //     if(err){
        //         console.log('something went wrong retrieving persons');
        //     }else {
        //         // res.render('one', {person: person});
        //         res.json({person: person});
        //     }
        // })
    },
    updatePerson: function(req, res) {
        // Person.findOne({_id: req.body._id}, function(err, person){
        //     console.log(person);
        //     if(err){
        //         console.log('something went wrong retrieving orcas');
        //     }else {
        //         // res.render('edit', {orca: orca});
        //         res.redirect('/');
        //
        //     }
        // });
    },
    // Delete an Person by name
    deletePerson: function(req, res) {
        // Product.remove({_id: req.params.id}, function(err){
        //     if(err){
        //         console.log('error occured');
        //     }else {
        //         res.json({});
        //     }
        // })
    }

}
