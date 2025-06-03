const express = require('express');
const router = express.Router();
const {
  getHomePage,
  getLog,
  postCreateUser,
} = require('../controllers/homeController');
//khai bao router
router.get('/', getHomePage);
router.get('/abc', getLog);
router.post('/create-user', postCreateUser);
module.exports = router; // export default
