const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../../models/userModel');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    // eslint-disable-next-line consistent-return
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (user) {
          return done(null, { message: 'user already registered' });
        }
        if (!user) {
          const newUser = await User.create({
            email,
            password,
            name: req.body.name,
            role: req.body.role,
            login: req.body.login
          });
          return done(null, newUser);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  'login',
  new Strategy(
    {
      usernameField: 'login',
      passwordField: 'password'
    },
    async (login, password, done) => {
      try {
        const user = await User.findOne({ login });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: "Wrong password'" });
        }

        return done(null, user, { message: 'Logged in Succesfully' });
      } catch (error) {
        return done(null, false);
      }
    }
  )
);
