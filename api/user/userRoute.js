const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('./userModel');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');
const mw = require('./userMiddleware');

router.post('/register', mw.validateUniqueUsername, (req, res) => {
  let user = req.body;
  const hash= bcrypt.hashSync(user.password, 12); // 12 is hashing
  user.password = hash;

  Users.add(user)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json({ err: err.message }))
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  .first()
  .then(user =>{
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" })
      }
    })
    .catch(err => res.status(500).json({ err: err.message }))
});

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;