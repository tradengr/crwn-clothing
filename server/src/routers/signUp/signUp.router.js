const signUpRouter = require('express').Router();
const { httpSubmitSignUp } = require('./signUp.controller');

signUpRouter.post('/', httpSubmitSignUp);

module.exports = signUpRouter;