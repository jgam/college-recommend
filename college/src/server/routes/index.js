// routes/index.js

module.exports = function (app, User) {
  // GET ALL users
  app.get('/api/users', function (req, res) {
    User.find(function (err, users) {
      if (err)
        return res.status(500).send({ error: 'database erroroccurred!' });
      res.status(200).json(users);
    });
  });

  // GET SINGLE User
  app.get('/api/user/:username', function (req, res) {
    User.findOne({ _id: req.params.username }, function (err, user) {
      if (err) return res.status(500).json({ error: err });
      if (!user) return res.status(404).json({ error: 'user not fonud' });
      res.json(user);
    });
  });

  // CREATE User
  app.post('/api/user', function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function (err) {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }

      res.json({ result: 1 });
    });
  });

  // UPDATE THE user
  app.put('/api/user/:user_id', function (req, res) {
    res.end();
  });

  // DELETE user
  app.delete('/api/user/:userid', function (req, res) {
    res.end();
  });
};
