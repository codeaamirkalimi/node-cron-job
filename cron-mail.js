const cron = require('node-cron');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'casey.jacobson43@ethereal.email',
        pass: 'AhJh1HVSBYadkW8Mz9'
    }
});

cron.schedule('* * * * *', () => {
    console.log('_________________________');
    console.log('Running cron-mail');
    let messageOptions = {
        from: 'casey.jacobson43@ethereal.email',
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