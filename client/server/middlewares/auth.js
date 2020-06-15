const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  console.log('in authmiddleware');
  // read the token from header or url
  const token = req.headers['x-access-token'] || req.query.token;

  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in',
    });
  }

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
      if (err) {
        console.log('verify err occurred');
        reject(err);
      }
      console.log('verify fine');
      resolve(decoded);
    });
  });

  // if it has failed to verify, it will return an error message
  const onError = (error) => {
    console.log('something has happened');
    //here jwt toekn expired error
    res.status(403).json({
      success: false,
      message: error.message,
      expiredAt: error,
    });
  };

  // process the promise
  p.then((decoded) => {
    req.decoded = decoded;
    console.log('decoded');
    console.log(decoded);
    next();
  }).catch(onError);
};

module.exports = authMiddleware;
