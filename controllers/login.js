const User = require('../models/user');
const { httpError } = require('../helpers');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw httpError(401, "Email or password is wrong")
    };

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        throw httpError(401, "Email or password is wrong")
    };

    const payload = {
        id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '8h' });
    await User.findByIdAndUpdate(user._id, { token });
   console.log(user)
    res.status(200).json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription,
            // token: user.token
        }
    });
};
 module.exports = login