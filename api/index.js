const express = require('express');
const consign = require('consign');
const mongoose = require('mongoose')

const db = require('./config/db');
require('./config/mongodb');

const app = express();

app.db = db;
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, console.log('listen in port 3000'));