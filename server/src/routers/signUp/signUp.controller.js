const { submitSignUp } = require('../../models/users/users.model');

async function httpSubmitSignUp(req, res) {
  const user = req.body;
  const { displayName, email, password } = user;

  if (!displayName || !email || !password) {
    return res.status(400).json({ Error: 'Incomplete User Data'});
  }

  const userCreated = await submitSignUp(user);
  if (!userCreated) return res.status(400).json({ Error: 'User already exists.' });
  return res.status(201).json({ Ok: 'User was registered successfully.' });
}

module.exports = { httpSubmitSignUp };