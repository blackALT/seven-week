const linguagens = require('../model/linguagens.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(linguagens);
}

const getById = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(linguagens.find((linguagens) => linguagens.id == id));
  };

module.exports = { getAll, getById }