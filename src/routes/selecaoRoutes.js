const express = require('express');
const router = express.Router();
const selecaoController = require('../controllers/selecaoController');

router.get('/', selecaoController.sortearSelecao);

module.exports = router;