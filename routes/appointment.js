var express = require('express');
var router = express.Router();

var appointment_controller = require('../controllers/appointment_controller');

router.get('/', appointment_controller.index);

module.exports = router;