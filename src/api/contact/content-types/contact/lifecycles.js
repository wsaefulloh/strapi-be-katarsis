const transporter = require('../../../../helpers/email-service');
const fs = require('fs');
const path = require("path");
// const nodemailer = require("nodemailer");

module.exports = {
    async afterCreate(event) {

        let dataHTML = fs.readFileSync(path.join(__dirname, "../../../../../public/template/admin-notification.html"), { encoding: "utf-8" });
        dataHTML = dataHTML.replace("{{name}}", `${event.params.data.name}`);
        dataHTML = dataHTML.replace("{{whatsapp}}", `${event.params.data.no_whatsapp}`);
        dataHTML = dataHTML.replace("{{email}}", `${event.params.data.email}`);
        dataHTML = dataHTML.replace("{{message}}", `${event.params.data.message}`);

        let getEmail = await strapi.db.connection.raw(
            `
                SELECT * FROM email_settings
            `
        );

        await transporter.sendMail({
            from: {
                name: "Katarsis Notification",
                address: `${process.env.EMAIL_ADDRESS_FROM}`,
            },
            to: `${getEmail.rows[0]?.email_send_to}`,
            subject: `${event.params.data?.subject ?? "Admin Notification"}`,
            html: dataHTML
        });
    },
};