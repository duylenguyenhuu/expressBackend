const express = require('express');
const router = express.Router();
const { getHomePage, getLog } = require('../controllers/homeController');
//khai bao router
router.get('/', getHomePage);
router.get('/abc', getLog);

module.exports = router; // export default
