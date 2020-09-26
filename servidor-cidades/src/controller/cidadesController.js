const cidades = require('../model/cidades.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(cidades);
}

const getById = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(cidades.find((cidades) => cidades.id == id));
  };

module.exports = { getAll, getById }