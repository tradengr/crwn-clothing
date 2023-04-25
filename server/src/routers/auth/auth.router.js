const passport = require('passport');
const authRouter = require('express').Router();

const { httpSubmitSignIn } = require('./auth.controller');

authRouter.get('/google', passport.authenticate('google', {
  scope: ['email', 'profile']
}));

authRouter.get('/google/callback', passport.authenticate('google', {
  failureRedirect: 'http://localhost:5173/signin',
  successRedirect: 'http://localhost:5173/',
}));

authRouter.post('/signin', passport.authenticate('local'), httpSubmitSignIn);

module.exports = authRouter;