import axios from 'axios';

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

async function httpSubmitSignUp(user) {
  try {
    return await axios.post(`${API_URL}/signup`, user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSubmitSignIn(user) {
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
    const res = await axios.delete(`${API_URL}/signout`, {
      withCredentials: true
    });
    if (res.status === 200) window.location.reload();
  } catch (err) {
    console.error(err);
  }
}

async function httpPostStripePayment(amount) {
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