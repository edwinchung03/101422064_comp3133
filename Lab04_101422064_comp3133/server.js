const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://admin:Password12345@cluster0.ozeam.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });

  app.use("/users", userRouter);

app.listen(8081, () => { console.log('Server is running...') });