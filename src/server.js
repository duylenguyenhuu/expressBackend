require('dotenv').config();
const express = require('express'); //commonjs
const path = require('path'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const app = express(); //app express
const port = process.env.PORT || 8081; //post => hardcode
const hostname = process.env.HOST_NAME;

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
//config template engine
configViewEngine(app);
//Khai báo router
app.use('/', webRouters);
