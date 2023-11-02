const express = require('express');
const router = express.Router();

const { getPokeneas, getPokenea } = require('../controllers/pokeneas.controller');

router.get('/', getPokeneas);
router.get('/random/', getPokenea);

module.exports = router;
