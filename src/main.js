const express = require('express');

const app = express();
const temaRoutes = require('./routes/temaRoutes');

const selecaoRoutes = require('./Routes/selecaoRoutes');

app.use('/tema', temaRoutes);

app.use('/selecao', selecaoRoutes);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

module.exports = app;