const express = require('express');
const subcategoryService = require('../services/SubcategoryService');
const auth = require('../services/AuthService');

const router = express.Router({ mergeParams: true });

// search category
// router.post('/search', async (req, resp) => {
//   const data = await categoryService.listCategory(req.body);
//   console.log('dataaaaaaaaa', data);
//   if (data) resp.status(200).json({ categories: data });
//   else resp.status(500).json({ msg: 'something went wrong' });
// });

// create subcategory
router.post('/', auth.adminAuth, async (req, resp) => {
  const data = await subcategoryService.createSubcategory(req.body, req.params.uuid, req.user.uuid);
  if (data) resp.status(200).json({ msg: 'subcategory created successfully' });
  else resp.status(500).json({ msg: 'something went wrong' });
});

// router.post('/register', async (req, res) => {
//   await UserService.register(req.body).then((n) =>
//   console.log(1111111);
//   );
// });
// router.put(':uuid/deactivate', UserService.deactivateUser);
// router.put(':uuid/activate', UserService.activateUser);

module.exports = router;
