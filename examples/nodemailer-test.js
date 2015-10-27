//This code has been modified from the nodemailer github example for the Beaglebone Black Cookbook.

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'user_password'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    // sender address
    from: 'Ground Control <your_name@gmail.com>',
    // list of receivers
    to: 'sender_name1@some_domain.com, another_address@anotherdomain.com',
    // Subject line
    subject: 'This is Ground Control to Major Tom',
    // plaintext body
    text: 'Can you hear me, Major Tom?',
     // html body
    html: '<b>Can you hear me Major Tom?</b>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
 
});
