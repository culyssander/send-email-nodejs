module.exports = {
    USER_CREATE: 'INSERT INTO user SET ?',
    USER_GET_ALL: 'SELECT * FROM user ORDER BY id',
    USER_GET_BY_EMAIL: 'SELECT * FROM user WHERE email = '
}