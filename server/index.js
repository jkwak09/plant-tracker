require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./database/index.js');

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
