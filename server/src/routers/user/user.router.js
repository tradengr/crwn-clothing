const { httpGetUser } = require('./user.controller');

const userRouter = require('express').Router();

userRouter.get('/', httpGetUser);

module.exports = userRouter;