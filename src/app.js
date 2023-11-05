const express = require('express');
const router = require('./routes/pokeneas.routes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('./src/public'));
app.use(express.json());
app.use('/api/v1/pokeneas', router);

module.exports = app;
