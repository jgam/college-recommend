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

exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};
/*
exports.check = (req, res) => {
  //read the token from header or url
  const token = req.headers['x-access-token'] || req.query.token;

  //token not exist?
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in due to token not exist',
    });
  }

  //create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
      if (err) reject(err);
      //here decoded is user information decoded with secret
      resolve(decoded);
    });
  });

  //if token valid, will respond with its info
  const respond = (token) => {
    res.json({
      success: true,
      info: token,
    });
  };

  //if failed to verify, will return an error message
  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  };

  //process the promise
  p.then(respond).catch(onError);
};
*/
