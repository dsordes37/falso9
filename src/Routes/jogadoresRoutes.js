const express = require('express');
const Router = express.Router();
const jogadoresController = require('../Controllers/jogadoresController');

Router.get("/", jogadoresController.listarJogadores);

module.exports = Router;