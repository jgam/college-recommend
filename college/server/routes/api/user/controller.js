const User = require('../../../models/userModel');

// get /api/user/list

exports.list = (req, res) => {
  if (!req.decoded.admin) {
    return res.status(403).json({
      message: 'you are not an admin!',
    });
  }

  User.find({}).then((users) => {
    res.json({ users });
  });
};

// POST api/user/assign-admin/
