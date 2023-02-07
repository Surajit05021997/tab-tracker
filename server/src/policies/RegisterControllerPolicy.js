const joi = require('joi');

module.exports = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}')),
  })
  const {error, value} = schema.validate(req.body);

  if(error) {
    switch(error.details[0].context.key) {
      case 'email':
        res.status(400).send('You must provide valid email address.');
        break;
      case 'password':
        res.status(400).send('Password must contains character between 8 to 32 haveing lowercase or uppercase or numbers.');
        break;
      default:
        res.status(400).send('Invalid data!');
    }
  } else {
    next();
  }
}