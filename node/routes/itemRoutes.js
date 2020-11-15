const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();


router.get('/list', itemController.item_list);
/* router.get('/add', itemController.item_add); */

module.exports = router;
