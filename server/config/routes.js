var persons = require('../controllers/persons.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports = function(app) {
    // Get all Customers
    app.get('/getCustomers', function(req, res){
        persons.showAll(req, res);
    });

    // Create Customer
    app.post('/new/:name', function(req, res) {
        persons.createPerson(req, res);
    });

    // Delete Customer
    app.delete('/remove/:id/', function(req, res){
        persons.deletePerson(req, res);
    });

    // Get all Orders
    app.get('/getOrders', function(req, res) {
        orders.showAll(req, res);
    });

    // Create Order
    app.post('/newOrder', function(req, res) {
        orders.createOrder(req, res);
    });

    // Get all Products
    app.get('/getProducts', function(req, res) {
        products.showAll(req, res);
    });

    // Add new product
    app.post('/newProduct/:name', function(req, res){
        products.addProduct(req, res);
    });

    app.get('/newProduct/:name', function(req, res){
        products.addProduct(req, res);
    });

}
