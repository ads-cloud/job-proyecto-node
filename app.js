const express = require('express');
const app = express();

require('./jobs')

app.use(express.json())

module.exports = app;