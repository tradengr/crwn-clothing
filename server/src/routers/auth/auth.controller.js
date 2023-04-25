async function httpSubmitSignIn(req, res) {
  console.log('here')
  return res.status(200).json({ Ok: 'Successfully Authenticated' });
}

module.exports = {
  httpSubmitSignIn
}