import axios from 'axios';

import { UserSignIn, UserSignUp } from '../redux/user/user.slice';
import { StripePaymentParameter } from '../components/paymentForm/PaymentForm.component';

const API_URL = 'http://localhost:3000';

async function httpGetCategories() {
  try {
    return await axios.get(`${API_URL}/categories`, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSubmitSignUp(user: UserSignUp) {
  try {
    return await axios.post(`${API_URL}/signup`, user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSubmitSignIn(user: UserSignIn) {
  try {
    return await axios.post(`${API_URL}/auth/signin`, user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpGetUser() {
  try {
    return await axios.get(`${API_URL}/user`, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSignOutUser() {
  try {
    return await axios.delete(`${API_URL}/signout`, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpPostStripePayment(amount: StripePaymentParameter) {
  try {
    return await axios.post(`${API_URL}/stripe-payment`, amount, { 
      withCredentials: true 
    });
  } catch (err) {
    console.error(err);
  }
}

export {
  httpGetCategories,
  httpSubmitSignUp,
  httpSubmitSignIn,
  httpGetUser,
  httpSignOutUser,
  httpPostStripePayment,
}