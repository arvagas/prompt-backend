const Users = require('./userModel');

module.exports = {
  validateUniqueUsername,
};

function validateUniqueUsername(req, res, next) {
  const { username } = req.body;

  Users.findBy({ username })
    .then(user => {
      if (user.length) res.status(409).json({ message: "Username already exists. Please choose another." });
      else next();
    })
    .catch(err => res.status(500).json({ message: "Error validating if username is unique." }))
}