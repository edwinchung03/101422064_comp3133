const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    address: {
        building: String,
        street: String,
        zipcode: String,
      },
      city: String,
      cuisine: String,
      name: String,
      restaurant_id: Number
});

RestaurantSchema.pre('save', (next) => {
    console.log("Before save")
    let now = Date.now()

    this.updatedat = now
    if (!this.created){
        this.created = now
    }
    next()
});

RestaurantSchema.pre('findOneAndUpdate', (next) => {
    console.log("Before findOneAndUpdate")
    let now = Date.now()
    this.updatedat = now
    console.log(this.updatedat)
    next()
});

RestaurantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});
  
RestaurantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
});
  
RestaurantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
});
  
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;

