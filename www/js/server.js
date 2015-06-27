//server.js created from example at: https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application

//modules ===========================================================================================
var express			= require('express');
var app 			= express();
var mongodb 		= require('mongodb');
var bodyParser		= require('body-parser');
var mongoose		= require('mongoose'); //included for future but not really going to use mongoose right now
var itemsTest		= require('./models/items_test');
//configuration   ===================================================================================

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config files
var db= require('./config/db')

mongodb.MongoClient.connect(db.uri, function(err, db) {
	if(err) throw err;
	console.log('connected to MongoClient')
});



//this next piece used this link as a model: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

var port = process.env.PORT || 27017;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /edit
// ----------------------------------------------------
router.route('/edit/submitted')

    // create an item
    .post(function(req, res) {
        
        var itemtest = new items_test();      // create a new instance of the items_test model
        itemtest.description = req.body.name;  // set the itemtest description (comes from the request)

        // save the item and check for errors
        itemtest.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'itemtest created!' });
        });
        
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);