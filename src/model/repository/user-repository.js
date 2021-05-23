'use strict'

const connection = require('../database/database');
const User = require('../domain/user-model');
const scriptSql = require('../../config/script-sql-config');

User.gettAll = async result => {
    const sql = scriptSql.USER_GET_ALL;
    await connection.query(sql, (err, res) => {
        if(err) {
            console.log('Error: ',err);
            result(err, null);
            return;
        }
        console.log('user: ', res);
        result(null, res);
    });
}

User.create = async(user, result) => {
    const sql = scriptSql.USER_CREATE;
    await connection.query(sql, user, (err, res) => {
        if(err) {
            console.log('Error: ',err);
            result(err, null);
            return;
        }
        console.log(`User added successfully ${{id: res.insertId, ...user}}`);
        result(null, {id: res.insertId, ...user});
    });
}


module.exports = User;