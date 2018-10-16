//You can replace this entire file with your Bootcamp Assignment #3 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here from Bootcamp Assignment #3 - ListingSchema.js File*/
  code: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  address: {type: String},
  coordinates: {
    latitude: {type: Number},
    longitude: {type: Number}
  },
  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here from Bootcamp Assignment #3 - ListingSchema.js File */
  /* Retrieve the current date */
  var currDate = new Date();

  //The updated_at field will be updated every time that a document is added or updated
  this.updated_at = currDate;

  //This will test if the created_at field exists.  If it does, there will be no change.  If not, it will
  //add the field, because it is a new document.
  if(!this.created_at_)
    this.created_at = currDate;

    next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
