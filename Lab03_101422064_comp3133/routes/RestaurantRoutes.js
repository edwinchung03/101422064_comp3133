const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantModel.find({});
    try{
        console.log(restaurants[0].name)
        res.status(200).send(restaurants)
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const cuisine = req.params.cuisine
    const restaurants = await restaurantModel.find({cuisine : new RegExp(cuisine, 'i')});

    try{
        if (restaurants.length != 0) {
            res.send(restaurants);
        } else{
            res.send(JSON.stringify({status: false, message: "No data found"}))
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

app.get("/restaurants", async (req, res) => {
    try {
      const { sortBy } = req.query;
      const sortOrder = sortBy === "DESC" ? -1 : 1;
      const restaurants = await restaurantModel.find({}, { _id: 1, restaurant_id: 1, name: 1, cuisine: 1, city: 1})
        .sort({ restaurant_id: sortOrder });
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get("/restaurants/Delicatessen", async (req, res) => {
    try {
      const restaurants = await restaurantModel.find(
        { cuisines: "Delicatessen", city: { $ne: "Brooklyn" } },
        { _id: 0, cuisines: 1, name: 1, city: 1 }
      ).sort({ name: 1 });
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = app