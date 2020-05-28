// routes/index.js

module.exports = function (app, User) {
  // GET ALL BOOKS
  app.get('/api/user', function (req, res) {
    res.end();
  });

  // GET SINGLE BOOK
  app.get('/api/user/:user_id', function (req, res) {
    res.end();
  });

  // GET BOOK BY AUTHOR
  app.get('/api/user/:username', function (req, res) {
    res.end();
  });

  // CREATE BOOK
  app.post('/api/user', function (req, res) {
    console.log('post in here');
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

  // UPDATE THE BOOK
  app.put('/api/user/:user_id', function (req, res) {
    res.end();
  });

  // DELETE BOOK
  app.delete('/api/user/:userid', function (req, res) {
    res.end();
  });
};
