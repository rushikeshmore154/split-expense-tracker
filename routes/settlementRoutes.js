// routes/settlementRoutes.js
const express = require('express');
const { getPeople, getBalances, getSettlements } = require('../controllers/settlementController');
const router = express.Router();

router.get('/people', getPeople);
router.get('/balances', getBalances);
router.get('/settlements', getSettlements);

module.exports = router;
