'use strict';

// Node Dependencies
require('dotenv').config();
const express = require('express');

// App
const app = express();

// Port
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.use('*', (req, res) => {
  res.send('Sorry this doesn\'t work yet.');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));