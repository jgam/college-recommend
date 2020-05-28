const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var router = require('./routes')(app, user);

/*
app.get('/api/users', (req, res) => {
  userModel.find(function (err, users) {
    if (err) return res.status(500).end({ error: 'database failure' });
    if (users.length == 0) res.send({ Error: 'no user yet!' });
    res.json(users);
  });
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  var user = new userModel();
  user.username = req.body.username;
  user.name = req.body.name;
  user.password = req.body.password;
  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }
    res.json({ result: 1 });
  });
  res.send(
    `I received your POST request. This is what you sent me: ${req.body}`
  );
});
*/
app.listen(port, () => console.log(`Listening on port ${port}`));
