const express = require('express');
const categoryService = require('../services/CategoryService');
const auth = require('../services/AuthService');

const router = express.Router();

// search category
router.post('/search', async (req, resp) => {
  const data = await categoryService.listCategory(req.body);
  if (data) resp.status(200).json({ categories: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});

// create category
router.post('/', auth.adminAuth, async (req, resp) => {
  const data = await categoryService.createCategory(req.body, req.user.uuid);
  if (data) resp.status(200).json({ msg: 'category created successfully' });
  else resp.status(500).json({ msg: 'something went wrong' });
});
// router.post('/register', async (req, res) => {
//   await UserService.register(req.body).then((n) =>
//   console.log(1111111);
//   );
// });
// router.put(':uuid/deactivate', UserService.deactivateUser);
// router.put(':uuid/activate', UserService.activateUser);

router.use('/:uuid/subcategory', require('./SubcategoryRoute'));

module.exports = router;
