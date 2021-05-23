'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        title: 'Welcome to send mail',
        version: '0.0.1'
    });
});

module.exports = router;