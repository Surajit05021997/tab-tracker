const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User.js');

const config = require('./config/config.js');

const strategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
}

passport.use(new JwtStrategy(strategyOptions, async function(jwtPayload, done) {
  try {
    const user = await User.findOne({_id: jwtPayload._id});
    if(user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch(err) {
    return done(err, false);
  }
}));

module.exports = null;
