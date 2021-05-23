'use strict'

const mysql = require('mysql');
const databaseConfig = require('../../config/database-config');

const connection = mysql.createConnection({
    host: databaseConfig.HOST,
    user: databaseConfig.USER,
    password: databaseConfig.PASSWORD,
    database: databaseConfig.DATABASE
});

connection.connect(err => {
    if(err) {
        console.log('Error: ', err);
        throw err;
    }
    console.log(`database ${connection.state}`);
})

module.exports = connection;