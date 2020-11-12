var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* GET users listing. */
router.post('/login', userController.user_login);

module.exports = router;
