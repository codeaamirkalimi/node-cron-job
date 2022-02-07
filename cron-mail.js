const cron = require('node-cron');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'helmer.gerhold81@ethereal.email',
        pass: 'AE9SyrwWGfjn32rcSt'
    }
});

cron.schedule('* * * * *', () => {
    console.log('_________________________');
    console.log('Running cron-mail');
    let messageOptions = {
        from: 'helmer.gerhold81@ethereal.email',
        to: 'aamir@applaunch.io',
        subject: 'Scheduled Email',
        text: 'Hi there. This email was automatically sent by us.'
      };
    
      transporter.sendMail(messageOptions, function(error, info) {
        if (error) {
          throw error;
        } else {
          console.log('Email successfully sent!');
        }
      });
})