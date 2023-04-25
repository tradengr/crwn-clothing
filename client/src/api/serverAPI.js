import axios from 'axios';

const API_URL = 'http://localhost:3000';

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

export {
  httpSubmitSignUp,
  httpSubmitSignIn,
}