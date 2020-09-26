const express = require('express');
const app = express();

const index = require('./routes/index')
const cidades = require('./routes/cidadesRoute.js')

app.use((req, res, next) => {
    console.log('nova requisição realizada')

    next()
});

app.use("/", index);
app.use("/cidades", cidades);

module.exports = app