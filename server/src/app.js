require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
// const flash = require('connect-flash');

const { passportConfig } = require('./utils/passport.utils');

const signUpRouter = require('./routers/signUp/signUp.router');
const authRouter =  require('./routers/auth/auth.router');
const userRouter = require('./routers/user/user.router');
const signOutRouter = require('./routers/signout/signout.router');
const categoriesRouter = require('./routers/categories/categories.router');

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
// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/categories', categoriesRouter)
app.use('/signup', signUpRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/signout', signOutRouter);

// -----------------------------------------------------
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
app.post('/stripe-payment', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: [ 'card' ],
    });
    return res.status(200).json(paymentIntent);
  } catch (err) {
    return res.status(400).json(err);
  }
});
// -----------------------------------------------------
module.exports = app;