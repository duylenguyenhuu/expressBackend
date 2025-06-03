const connection = require('../config/database');

const getHomePage = (req, res) => {
  return res.render('home.ejs');
};
const postCreateUser = (req, res) => {
  console.log('>>> express.body', req.body);
  res.send('create a new user');
};
const getLog = (req, res) => {
  //process data
  //call model
  let users = [];
  // A simple SELECT query
  connection.query(
    'select * from adminPet.products',
    function (err, results, fields) {
      console.log('results', results); // results contains rows returned by server
      console.log('fields', fields); // fields contains extra meta data about results, if available
      users = results;
      res.send(JSON.stringify(users));
    }
  );
};
module.exports = {
  postCreateUser,
  getHomePage,
  getLog,
};
