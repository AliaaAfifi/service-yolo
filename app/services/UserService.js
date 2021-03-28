// const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

// const config = require('../../config/index.js');

const { user, sequelize } = require('../models');
// const { request } = require('express');
// User login
exports.login = async (req, res) => {
  // const { jwtSecretKey } = config.app.jwt.secret_key;
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
    const token = jwt.sign({ tokenData }, 'vkbhd9HNqpz46ePwq6pKaWJz1ME7GXnJQqRXIpTqNmOp8BJR2Ya4uyPoYQlGHdX');
    res.json({
      data: {
        token,
        user: foundUser,
      },
    });
  }
};

// User registration
exports.register = async (request) => {
  const {
    // eslint-disable-next-line camelcase
    email, username, password, first_name, last_name,
  } = request;
  const uuid = uuidv4();
  return user.create({
    uuid,
    username,
    password: md5(password),
    first_name,
    last_name,
    email,
    role: 'CUSTOMER',
    is_active: true,
    created_at: sequelize.literal('CURRENT_TIMESTAMP'),
    created_by: uuid,
  // eslint-disable-next-line no-console
  }).then((data) => data).catch((error) => console.log('error: ', error));
};

// Adding user
exports.addUser = async (request, userUUID) => {
  const {
    // eslint-disable-next-line camelcase
    email, username, password, first_name, last_name,
  } = request;
  const uuid = uuidv4();
  return user.create({
    uuid,
    username,
    password: md5(password),
    first_name,
    last_name,
    email,
    role: 'ADMIN',
    is_active: true,
    created_at: sequelize.literal('CURRENT_TIMESTAMP'),
    created_by: userUUID,
  // eslint-disable-next-line no-console
  }).then((data) => data).catch((error) => console.log('error: ', error));
};

exports.listUsers = async () => user.findAll();

// Handle User deactivation
exports.deactivateUser = (req, res) => {
  res.send('NOT IMPLEMENTED: Deactivate user');
};

// Handle User activation
exports.activateUser = (req, res) => {
  res.send('NOT IMPLEMENTED: Activate user');
};
