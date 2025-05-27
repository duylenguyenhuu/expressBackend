const express = require('express');
const router = express.Router();
//khai bao router
router.get('/', (req, res) => {
  res.render('sample.ejs');
});
router.get('/abc', (req, res) => {
  res.send('Check ABC & nodemon!');
});

module.exports = router; // export default
