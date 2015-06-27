// //see example : https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
// // app/routes.js

// // grab the items_test model we just created
// var itemsTest = require('./models/nerd');

//     module.exports = function(app) {

//         // server routes ===========================================================
//         // handle things like api calls
//         // authentication routes

//         // sample api route
//         app.get('/api/items_test', function(req, res) {
//             // use mongoose to get all items_test in the database
//             itemsTest.find(function(err, items_test) {

//                 // if there is an error retrieving, send the error. 
//                                 // nothing after res.send(err) will execute
//                 if (err)
//                     res.send(err);

//                 res.json(items_test); // return all items_test in JSON format
//             });
//         });

//         // route to handle creating goes here (app.post)
//         // route to handle delete goes here (app.delete)

//         // frontend routes =========================================================
//         // route to handle all angular requests
//         app.get('*', function(req, res) {
//             res.sendfile('./public/views/index.html'); // load our public/index.html file
//         });

//     };
