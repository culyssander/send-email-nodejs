var nodemailer = require('nodemailer');
var notificationConfig = require('../../config/notification-config');

var transporter = nodemailer.createTransport({
    service: notificationConfig.SERVICE_GMAIL,
    auth: {
      user: notificationConfig.EMAIL,
      pass: notificationConfig.PASSWORD
    }
  });
  
  module.exports = transporter;