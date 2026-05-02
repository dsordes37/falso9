const express = require('express');
const router = express.Router();
const temaController = require('../controllers/temaController');

router.get('/', temaController.sortearTema);

module.exports = router;