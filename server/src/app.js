const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');

const { passportConfig } = require('./utils/passport.utils');
const authRouter =  require('./routers/auth/auth.router');
const signUpRouter = require('./routers/signUp/signUp.router');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 90 * 1000 }
}));
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/signup', signUpRouter);

module.exports = app;