'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const router = express.Router();

const indexRoute = require('./api/route/index-route');
const userRoute = require('./api/route/user-route');

const app = express();

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-with, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(bodyParser.json({limit: '5mb'}));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/', indexRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;