const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://admin:PassPassPass@cluster0.ozeam.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });