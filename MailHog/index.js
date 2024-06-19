const mailer = require('nodemailer');

const smtp = mailer.createTransport({
    host: 'localhost',
    port: '1025',
    auth: {
        user: 'user',
        pass: 'password',
    }
});

const mailOptions = {
    from: 'jan.zahradnik@profiq.com',
    to: 'jendazah@gmail.com',
    subject: 'Test email',
    html: '<h1>Eshkere</h1><p>ty lopato</p>'
};

smtp.sendMail(mailOptions, function(err, info) {
    if (!err) {
        console.log('Mail success: ' + info.response);
    } else {
        console.log('Mail err', err);
    }
    smtp.close();
});
