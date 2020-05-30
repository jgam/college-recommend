const jwt = require('jsonwebtoken');
const User = require('../../../models/userModel');

exports.register = (req, res) => {
  const { username, password, name } = req.body;
  let newUser = null;
  //create a new user if does not exist
  const create = (user) => {
    if (user) {
      throw new Error('username exists');
      //return Promise.resolve(false);
    } else {
      console.log('create done');
      return User.create(name, username, password);
    }
  };

  const respond = () => {
    console.log('response done');
    res.json({
      message: 'registered successfully',
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  User.findOneByUsername(username).then(create).then(respond).catch(onError);
  console.log(User);
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const secret = req.app.get('jwt-secret');
  console.log('secret');
  console.log(secret);

  //check the user info & generate the jwt
  const check = (user) => {
    if (!user) {
      //user does not exist?
      throw new Error('user not exist');
    } else {
      // user exists? check the password
      if (user.verify(password)) {
        const p = new Promise((resolve, reject) => {
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
            },
            secret,
            {
              expiresIn: '7d',
              issuer: 'jgam.com',
              subject: 'userInfo',
            },
            (err, token) => {
              if (err) reject(err);
              resolve(token);
            }
          );
        });
        return p;
      } else {
        throw new Error('login failed');
      }
    }
  };

  //respond the token
  const respond = (token) => {
    res.json({
      message: 'logged in successfully with jwt',
      token,
    });
  };

  //error occurred
  const onError = (error) => {
    res.status(403).json({
      message: error.message,
    });
  };

  //find the user
  User.findOneByUsername(username).then(check).then(respond).catch(onError);
};
