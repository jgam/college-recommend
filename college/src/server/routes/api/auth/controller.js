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
  res.send('login api is working');
};
