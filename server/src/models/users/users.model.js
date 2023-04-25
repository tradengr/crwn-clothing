const bcrypt = require('bcryptjs');

const Users = require('./users.mongo');

async function createUser(user) {
  const { displayName, email, password } = user;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await Users.create({
      displayName,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    console.error(err);
  }
}

async function submitSignUp(user) {
  const doc = await Users.findOne({ email: user.email });
  if (doc) return;
  return await createUser(user);
}

module.exports = { submitSignUp };