const cron = require('node-cron');
const fs = require('fs');

cron.schedule('* * * * *', () => {
    console.log('____________________');
    console.log('Running cron delete');
    fs.unlink('./error.log', err => {
        if(err) {
            throw err;
        }
        console.log('Error file deleted successfully!');
    })
});