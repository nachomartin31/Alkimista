const passport = require('passport');
const JWTStrategy = require('passport-jwt');

passport.use(
  new JWTStrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
