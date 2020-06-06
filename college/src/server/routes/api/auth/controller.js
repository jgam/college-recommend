const jwt = require('jsonwebtoken');
const User = require('../../../models/userModel');

exports.register = (req, res) => {
  const { username, password, name, colleges } = req.body;
  //create a new user if does not exist
  const create = (user) => {
    if (user) {
      throw new Error('username exists');
      //return Promise.resolve(false);
    } else {
      return User.create(name, username, password, { ids: ['init'] });
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
};

exports.login = (req, res) => {
  console.log('in login');
  const { username, password } = req.body;
  const secret = req.app.get('jwt-secret');

  //check the user info & generate the jwt
  const check = (user) => {
    if (!user) {
      //user does not exist?
      throw new Error('user not exist');
    } else {
      // user exists? check the password
      if (user.verify(password)) {
        console.log('colleges');
        console.log(user);
        console.log(user.colleges);
        const p = new Promise((resolve, reject) => {
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
              colleges: user.colleges,
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
      message: 'token generated properly',
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

exports.collegesUpdate = (req, res) => {
  console.log('in colleges update');
  console.log('in colleges update of controller');
  console.log(req.body);
  const { id, updatedColleges, name } = req.body;
  console.log(id);
  console.log(updatedColleges);

  var options = {
    new: true,
    lean: true,
  };

  const respond = () => {
    res.json({
      message: 'colleges updated properly',
    });
  };
  const onError = (error, result) => {
    res.status(403).json({
      result: result,
      message: error.message,
    });
  };
  User.findByIdAndUpdate(
    id,
    {
      name: name,
      colleges: {
        ids: updatedColleges,
      },
    },
    options
  )
    .then(respond)
    .catch(onError);
  //firs try with this and implement custom created function
  console.log('done with user findbyandupdate');
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
