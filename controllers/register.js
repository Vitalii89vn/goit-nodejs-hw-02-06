const User = require('../models/user');
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { httpError } = require("../helpers");

const register = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw httpError(409, 'Email in use')
    };
    const hashPass = await bcrypt.hash(password, 10)

    const avatarURL = gravatar.url(email)
    const newUser = await User.create({ ...req.body, password: hashPass, avatarURL });

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL
        }
    })
};
module.exports = register;