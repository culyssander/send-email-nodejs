'use strict'

const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router();

router.get('/', userController.getAll);
router.post('/', userController.post);

module.exports = router;