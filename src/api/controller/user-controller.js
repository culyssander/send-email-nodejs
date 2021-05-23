'use strict'

const userRepository = require('../../model/repository/user-repository');
const notificationByEmail = require('../../model/util/notification-email');
const Validator = require('../../model/util/validator');
const message = require('../../config/message-config');
const bycript = require('bcrypt');

exports.getAll = async(req, res, next) => {
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1; // set the current page number
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10; // set the limit of items per page

    let startValue;
    let endValue;

    if(page > 0) {
        startValue = (page * limit) - limit; // 0, 10, 20, 30...
        endValue = page * limit;
    } else {
        startValue = 0;
        endValue = 10;
    }

    try {
        await userRepository.gettAll((e,result) => {
            console.log(result);
            res.send({
                count: result.length,
                users: result.slice(startValue, endValue)
            });
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).send({message: 'Failed to process the request.'})
    }
}


exports.post = async(req, res, next) =>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  
        res.status(400).send({ 
            error:true, 
            message: 'Please provide all required field. ',
            fields: [
                {
                    email: 'string',
                    password: 'string',
                    secretRole: 'string',
                    role: 'string'
                }
            ]
        });
        return
    }

    try {
        const validator = validatorData(req.body);

        if(!validator.isValid()) {
            res.status(400).send(validator.errors()).end();
            return;
        }

        const passwordBycript = bycript.hashSync('1234', 10);
        req.body.password = passwordBycript;

        await userRepository.create(req.body, (err, result) => {
            if(err) {
                res.status(400).send(err);
                return;
            }
            res.status(201).json({
                message:"User added successfully!",
                data:result
            });
            var mailOptions = {
                to: req.body.email,
                subject: message.EMAIL_SUBJECT,
                html: message.EMAIL_HTML
              };
              
            notificationByEmail.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
            });
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).send({message: 'Failed to process the request.'})
    }
}

const validatorData = (data) => {
    const validator = new Validator();

    validator.hasMinLen(data.email, 3, 'Email must not be empty');
    validator.hasMinLen(data.password, 3, 'Password must not be empty and must not be less than 3 characters');
    validator.isEmail(data.email, 'Email invalid');
    
    return validator;
}