//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const crypto = require('crypto');
const config = require('../config');

var UserSchema = new Schema({
  username: String,
  password: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
  colleges: {},
});

//here create methods for UserSchema
UserSchema.statics.create = function (name, username, password) {
  const encrypted = crypto
    .createHmac('sha1', config.secret)
    .update(password)
    .digest('base64');
  const user = new this({
    username,
    password: encrypted,
    name,
    colleges: {},
  });
  return user.save();
};

//find one user by using username
UserSchema.statics.findOneByUsername = function (username) {
  return this.findOne({
    username,
  }).exec();
};

//verify the pw of the user document
UserSchema.methods.verify = function (password) {
  const decrypted = crypto
    .createHmac('sha1', config.secret)
    .update(password)
    .digest('base64');
  return this.password === decrypted;
};

UserSchema.methods.assignAdmin = function () {
  this.admin = true;
  return this.save();
};

module.exports = mongoose.model('users', UserSchema);
