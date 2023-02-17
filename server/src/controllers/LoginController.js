const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const bcrypt = require('bcrypt');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result) {
          res.send({'user': user, token: jwtSignUser(user.toJSON())});
        } else {
          res.status(404).send('Invalid username or password!');
        }
      });
    } else {
      res.status(404).send('Invalid username or password!');
    }
  } catch(err) {
    res.status(500).send('An error occured during login!');
  }
}