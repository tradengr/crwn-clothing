const passport = require('passport');
const authRouter = require('express').Router();

authRouter.get('/google', passport.authenticate('google', {
  scope: ['email', 'profile']
}));
authRouter.get('/google/callback', passport.authenticate('google', {
  failureRedirect: 'http://localhost:5173/signin',
  successRedirect: 'http://localhost:5173/',
  session: false,
}));

module.exports = authRouter;