// const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const config = require('../../config/index.js');

const { user } = require('../models');
// User login
exports.login = async (req, res) => {
  const { jwtSecretKey } = config.app.jwt.secret_key;
  const { username, password } = req.body;

  const hashedPassword = md5(password);
  const foundUser = await user.findOne({
    where:
    { username, password: hashedPassword, is_active: true },
  });

  if (foundUser === null) {
    res.status(400).json({ msg: 'user not found, or not activated!' });
  } else {
    const tokenData = { uuid: foundUser.uuid, role: foundUser.role };
    const token = jwt.sign({ tokenData }, jwtSecretKey);
    res.json({
      token,
    });
  }
};

// User registeration
exports.register = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Adding user
exports.addUser = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle User deactivation
exports.deactivateUser = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Handle User activation
exports.activateUser = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};
