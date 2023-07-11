const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASS} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, 
    secure: true,
    auth: {
        user: "vitalii89vn@meta.ua",
        pass: META_PASS
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
    const email = {...data, from: "vitalii89vn@meta.ua"};
    await transport.sendMail(email);
    return true;
}

module.exports = sendEmail;