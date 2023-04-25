async function httpSubmitSignIn(req, res) {
  return res.status(200).json({ Ok: 'Successfully Authenticated' });
}

module.exports = {
  httpSubmitSignIn
}