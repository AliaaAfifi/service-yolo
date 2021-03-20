const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();

router.post('/login', UserService.login);
router.post('/register', UserService.register);
router.put(':uuid/deactivate', UserService.deactivateUser);
router.put(':uuid/activate', UserService.activateUser);

module.exports = router;
