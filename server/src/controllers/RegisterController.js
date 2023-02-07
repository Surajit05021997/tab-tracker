const User = require('../models/User.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  try {
    const existingUser = await User.findOne({email: req.body.email});
    if(existingUser) {
      res.status(400).send('Email is already used!');
    } else {
      const saltRounds = 10;
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const newUser = new User({
          email: req.body.email,
          password: hash,
        });
        await newUser.save();
        res.send("Registration successfull!");
      });
    }
  } catch(error) {
    res.status(500).send('Some error occured during registration!');
  }
}
