const express = require('express');
const UserService = require('../services/UserService');
const auth = require('../services/AuthService');

const router = express.Router();

router.post('/login', UserService.login);
router.post('/register', async (req, res) => {
  const data = await UserService.register(req.body);
  if (data) res.status(200).json({ msg: 'user created successfully' });
  else res.status(500).json({ msg: 'something went wrong' });
});

// create admin user
router.post('/', auth.adminAuth, async (req, res) => {
  const data = await UserService.register(req.body, req.user.uuid);
  if (data) res.status(200).json({ msg: 'admin created successfully' });
  else res.status(500).json({ msg: 'something went wrong' });
});

// list users
router.get('/', auth.adminAuth, async (req, resp) => {
  const data = UserService.listUsers();
  if (data) resp.status(200).json({ users: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});

router.put(':uuid/deactivate', UserService.deactivateUser);
router.put(':uuid/activate', UserService.activateUser);

module.exports = router;
