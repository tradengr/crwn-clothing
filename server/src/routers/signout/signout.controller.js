async function httpSignOutUser(req, res) {
  req.logOut(err =>{
    if (err) return next(err);
    return res.status(200).json({ Ok: 'Signed Out Successfully' });
  });
}

module.exports = { httpSignOutUser };