const express = require('express');
const router = express.Router();
const { time } = require('../controllers/apis');

router.get('/', time);

module.exports = router;

