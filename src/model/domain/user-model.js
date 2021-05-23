'use strict'

const User = (user) => {
    this.id = user.id,
    this.email = user.email,
    this.password = user.password,
    this.secret_code = user.secretCode,
    this.role = user.role,
    this.status = user.status,
    this.created_at = user.createdAt,
    this.last_updated = user.lastUpdated
}

module.exports = User;