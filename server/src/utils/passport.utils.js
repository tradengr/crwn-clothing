require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const Users = require('../models/users/users.mongo');

function passportConfig(passport) {
  const googleConfig = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  };

  async function verifyGoogle(accessToken, refreshToken, profile, done) {
    const email = profile.emails[0].value;
    const displayname = profile.displayName;
    const googleId = profile.id;
    try {
      const currentUser = await Users.findOneAndUpdate(
        { email: email }, 
        { displayName: displayname,
          email: email,
        }, 
        { upsert: true }
      );
      done(null, currentUser);
    } catch (err) {
      done(err);
    }
  }

  async function verifyLocal(email, password, done) {
    try {
      const user = await Users.findOne({ email: email });
      if (!user) return done(null, false, { Message: 'Incorrect username or password' });
      const result = await bcrypt.compare(password, user.password);
      if (!result) return done(null, false, { Message: 'Incorrect username or password' });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email'}, verifyLocal));
  passport.use(new GoogleStrategy(googleConfig, verifyGoogle));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async(id, done) => {
    try {
      const user = await Users.findById(id);
      const basicUserInfo = {
        displayName: user.displayName, 
        email: user.email,
      }
      return done(null, basicUserInfo);
    } catch (err) {
      return done(err);
    }
  })
}

module.exports = { passportConfig };
