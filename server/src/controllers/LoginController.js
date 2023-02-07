const User = require('../models/User.js');

module.exports = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if(user) {
      res.send(user);
    } else {
      res.status(404).send('Invalid username or password!')
    }
  } catch(err) {
    res.status(500).send('An error occured during login!');
  }
}