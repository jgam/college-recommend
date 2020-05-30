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

//here create methods for UserSchema
UserSchema.statics.create = function (name, username, password) {
  const user = new this({
    username,
    password,
    name,
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
  return this.password === password;
};

UserSchema.methods.assignAdmin = function () {
  this.admin = true;
  return this.save();
};

module.exports = mongoose.model('users', UserSchema);
