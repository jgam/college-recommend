//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userModelSchema = new Schema({
  username: String,
  password: String,
  name: String,
  createdAt: Date,
});

module.exports = mongoose.model('userModel', userModelSchema);
