const getHomePage = (req, res) => {
  res.render('sample.ejs');
};

const getLog = (req, res) => {
  //process data
  //call model
  res.send('Check ABC & nodemon!');
};
module.exports = {
  getHomePage,
  getLog,
};
