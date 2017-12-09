var express = require('express');
var router = express.Router();
var productsCtrl = require('../controllers/products');

router.get('/catalogue', productsCtrl.index);

module.exports = router;