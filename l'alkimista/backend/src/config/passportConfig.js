const passport = require('passport');

require('./passport-strategies/jwtStrategy');
require('./passport-strategies/localStrategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
