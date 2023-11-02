const express = require('express');
const router = require('./routes/pokeneas.routes');

const app = express();
app.use(express.json());
app.use('/api/v1/pokeneas', router);

module.exports = app;
