var express = require('express');
var router = express.Router();

var about_controller = require('../controllers/about_controller');

router.get('/', about_controller.index);

module.exports = router;