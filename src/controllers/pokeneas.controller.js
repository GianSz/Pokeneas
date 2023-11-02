const { request, response } = require('express');
const data = require('../data/data');
const os = require('os');

const getPokeneas = (req = request, res = response) => {
  res.status(200).json({
    status: 200,
    data,
    message: 'OK',
  });
};

const getPokenea = (req = request, res = response) => {
  const index = Math.floor(Math.random() * data.length);
  data[index]['hostname'] = os.hostname();
  res.status(200).json({
    status: 200,
    data: data[index],
    message: 'OK',
  });
};

module.exports = {
  getPokeneas,
  getPokenea,
}
