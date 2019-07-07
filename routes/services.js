var express = require('express');
var router = express.Router();

var services_controller = require('../controllers/services_controller');

router.get('/', services_controller.index);

module.exports = router;