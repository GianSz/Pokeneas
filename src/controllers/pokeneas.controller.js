const { response } = require('express');
const getData = require('../repositories/dataApi');
const os = require('os');

const getRandomPokenea = () => {
  const data = getData();
  let index = Math.floor(Math.random() * data.length);
  if (index == data.length) index--;
  return data[index];
};

const getPokeneaCard = (_, res = response) => {
  const pokenea = getRandomPokenea();
  res.render('show_card', {
    image: pokenea.image,
    docker_container: os.hostname(),
  });
};

const getPokeneaJSON = (_, res = response) => {
  const pokenea = getRandomPokenea();
  const data = {
    id: pokenea.id,
    nombre: pokenea.name,
    altura: pokenea.height,
    habilidad: pokenea.hability,
    contenedor_id: os.hostname(),
  };
  res.status(200).json({
    status: 200,
    data,
    message: 'OK',
  });
};

module.exports = {
  getPokeneaCard,
  getPokeneaJSON,
};
