const express = require('express');
const app = express();

const index = require('./routes/index')
const linguagens = require('./routes/linguagensRoute.js')

app.use((req, res, next) => {
    console.log('nova requisição realizada')

    next()
});

app.use("/", index);
app.use("/linguagens", linguagens);

module.exports = app