var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    // Display all of the persons
    showAll: function(req, res) {
        Customer.find({}, function(err, Customers){
            if(err){
                console.log('something went wrong retrieving Customers');
            }else {
                res.json({Customers: Customers});
            }
        })
    },
    // Create a new document on an Person
    createPerson: function(req, res){

        Customer.findOne({name: req.params.name}, function(err, customer){
            if(err){
                console.log('something went wrong retrieving customer');
            }else {
                if(!customer){ // customer doesn't already exist, add to db
                    var person = new Customer({name: req.params.name});
                    person.save(function(err){
                        if(err){
                            console.log('something went wrong');
                        }else {
                            res.redirect('/');
                        }
                    })
                }else{ // throw error, customer already exists
                    res.json({error: 'customer with name \''+req.params.name+'\' already exists!'});
                }
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
        Customer.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('error occured');
            }else {
                res.json({});
            }
        })
    }

}
