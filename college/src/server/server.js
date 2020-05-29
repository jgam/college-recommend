const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//express
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//mongoose connection
var mongoose = require('mongoose');

//default mongoose connection
//mongoDB = college is the database name, and under their, we have collections
var mongoDB =
  'mongodb+srv://jgam:19921019@cluster0-ewm3u.mongodb.net/college?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

//mongoose schema
var user = require('./models/userModel');
console.log('userModel');
console.log(user);

//send schema to router
var router = require('./routes')(app, user);

app.listen(port, () => console.log(`Listening on port ${port}`));
