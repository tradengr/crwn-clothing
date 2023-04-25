const signOutRouter = require('express').Router();

const { httpSignOutUser } = require('./signout.controller');

signOutRouter.delete('/', httpSignOutUser);

module.exports = signOutRouter;