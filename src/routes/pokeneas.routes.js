const express = require('express');
const router = express.Router();

const {
  getPokeneaJSON,
  getPokeneaCard,
} = require('../controllers/pokeneas.controller');

router.get('/json/pokenea', getPokeneaJSON);
router.get('/card/pokenea', getPokeneaCard);

module.exports = router;
