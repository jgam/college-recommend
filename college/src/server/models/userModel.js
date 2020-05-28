//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', UserSchema);
