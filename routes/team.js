var express = require('express');
var router = express.Router();

var team_controller = require('../controllers/team_controller');

router.get('/', team_controller.index);

module.exports = router;