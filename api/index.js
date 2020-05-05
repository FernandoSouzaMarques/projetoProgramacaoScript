const express = require('express');
const consign = require('consign');

const db = require('./config/db');

const app = express();

app.db = db;

consign()
  .then('./api')
  .then('./config/middlewares.js')
  .then('./config/routes.js')
  .into(app);

app.listen(3000, console.log('listen in port 3000'));