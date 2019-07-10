var express = require('express');
var router = express.Router();

var contact_controller = require('../controllers/contact_controller');

router.get('/', contact_controller.index);

module.exports = router;