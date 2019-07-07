var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customer_controller');

router.get('/', customer_controller.index);

module.exports = router;