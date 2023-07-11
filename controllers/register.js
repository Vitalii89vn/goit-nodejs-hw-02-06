const User = require('../models/user');
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require('uuid');

const { httpError, sendEmail  } = require("../helpers");

const register = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw httpError(409, 'Email in use')
    };
    const hashPass = await bcrypt.hash(password, 10)

    const avatarURL = gravatar.url(email);
    const verificationToken = uuidv4();

    const newUser = await User.create({ ...req.body, password: hashPass, avatarURL, verificationToken });

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://localhost:3000/users/verify/${verificationToken}">Verify your email</a>`
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL,
            verificationToken: newUser.verificationToken
        }
    })
};
module.exports = register;