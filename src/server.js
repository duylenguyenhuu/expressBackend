require('dotenv').config();
const express = require('express'); //commonjs
const path = require('path'); //commonjs
const configViewEngine = require('./config/viewEngine');
const router = require('./routes/web');
const app = express(); //app express
const port = process.env.PORT || 8081; //post => hardcode
const hostname = process.env.HOST_NAME;
const connection = require('./config/database');

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); // for form data
//for form data
//config template engine
configViewEngine(app);
//Khai báo router
app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
