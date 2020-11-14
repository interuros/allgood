var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* GET users listing. */
router.post('/register', userController.user_register);

module.exports = router;
