const express = require('express');
const router = express.Router();
const selecaoController = require('../Controllers/selecaoController');

router.get('/', selecaoController.sortearSelecao);

module.exports = router;