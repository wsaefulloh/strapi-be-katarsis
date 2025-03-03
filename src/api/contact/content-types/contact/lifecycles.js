const transporter = require('../../../../helpers/email-service');

module.exports = {
    async afterCreate(event) {
        console.log('masuk')
        // await transporter.sendMail({
        //     from: {
        //         name: "Katarsis Notification Email",
        //         address: process.env.EMAIL_ADDRESS_FROM,// sender address
        //     },
        //     to: process.env.EMAIL_ADDRESS_FOR,// list of receivers
        //     subject: 'Get in Touch',// Subject line
        //     html: `<div>Nama : ${event.params.data.name} <br/> Email : ${event.params.data.email} <br/> Pesan : ${event.params.data.message}</div>`
        // });
    },
};