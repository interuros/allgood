var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* GET users listing. */
router.post('/register', userController.user_register);
router.post('/login', userController.user_login);
router.get('/get', userController.user_get);

module.exports = router;
