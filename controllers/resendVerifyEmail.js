const User = require('../models/user');
const { httpError, sendEmail } = require('../helpers');

const resendVerifyEmail = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({ email });
    if(!user) {
        throw httpError(401, "Email not found");
    }
    if(user.verify) {
        throw httpError(400, "Verification has already been passed");
    }

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://localhost:3000/users/verify/${user.verificationToken}">Verify your email</a>`
    };

    await sendEmail(verifyEmail);

    res.status(200).json({
        message: "Verification email sent"
    })
}

module.exports = resendVerifyEmail