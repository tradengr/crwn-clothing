require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20');

const Users = require('../models/users/users.mongo');

function passportConfig(passport) {
  const googleConfig = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  };

  async function verifyGoogle(accessToken, refreshToken, profile, done) {
    const email = profile.emails[0].value;
    const displayName = profile.displayName;
    try {
      const currentUser = await Users.findOneAndUpdate(
        { email },
        { displayName, email },
        { upsert: true }
      );
      return done(null, currentUser);
    } catch (err) {
      return done(err);
    }
  }

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