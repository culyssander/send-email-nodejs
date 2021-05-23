'use strict'

const SendEmail = (sendEmail) => {
    this.id = sendEmail.id,
    this.to = sendEmail.to,
    this.userId = sendEmail.userId,
    this.subject = sendEmail.subject,
    this.text = sendEmail.text,
    this.html = sendEmail.html
    this.createdAt = sendEmail.createdAt
}