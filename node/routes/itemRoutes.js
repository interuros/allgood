const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

/* GET home page. */
router.get('/list', itemController.item_list);
/* router.get('/add', itemController.item_add); */

module.exports = router;
