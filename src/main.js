const express = require('express');

const app = express();

const jogadoresRoutes = require('./Routes/jogadoresRoutes');

app.use('/jogadores', jogadoresRoutes);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

module.exports = app;