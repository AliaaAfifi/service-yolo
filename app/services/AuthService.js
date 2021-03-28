const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
  try {
    // eslint-disable-next-line dot-notation
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'vkbhd9HNqpz46ePwq6pKaWJz1ME7GXnJQqRXIpTqNmOp8BJR2Ya4uyPoYQlGHdX');

    if (decodedToken.tokenData.role !== 'ADMIN') {
      res.status(401).json({
        errorMsg: 'Invalid role!',
      });
    } else {
      req.user = decodedToken.tokenData;
      next();
    }
  } catch {
    res.status(401).json({
      errorMsg: 'Authentication required!',
    });
  }
};

const userAuth = (req, res, next) => {
  try {
    // eslint-disable-next-line dot-notation
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'vkbhd9HNqpz46ePwq6pKaWJz1ME7GXnJQqRXIpTqNmOp8BJR2Ya4uyPoYQlGHdX');

    if (decodedToken.tokenData.role !== 'ADMIN' || decodedToken.tokenData.role !== 'CUSTOMER') {
      res.status(401).json({
        errorMsg: 'Invalid role!',
      });
    } else {
      req.user = decodedToken.tokenData;
      next();
    }
  } catch {
    res.status(401).json({
      errorMsg: 'Authentication required!',
    });
  }
};

module.exports = { adminAuth, userAuth };
