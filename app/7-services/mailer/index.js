(function() {
    'use strict';

    const nodemailer = require('nodemailer');

    function sendMail(options) {

        // TO DO
        const gmailTransporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'mail2bjs@gmail.com',
                pass: ''
            }
        });

        gmailTransporter.sendMail(options, function(err, info) {
            if(err) {
                console.log('ERR: ', err);
            } else {
                console.log('RESPONSE: ', info);
            }
            gmailTransporter.close();
        });
    }

    function makeMessage () {

    }

    function getOptions() {
        const mailOptions = {
            from: 'bhoomimalaviya@gmail.com',
            to: 'brijesh23388@gmail.com',
            subject: 'Registration Confirmation',
            text: 'Please click for confirmation',
            html: '<p>Hello</p>'
        };
    }

    moodule.exports = { sendMail, makeMessage };

})();
