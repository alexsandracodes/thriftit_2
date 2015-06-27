// models/items_test
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var Schema - mongoose.Schema;
var itemsSchema = new Schema({
    description : {type : String, default: ''
});
module.exports = mongoose.model('items_test', itemsSchema);