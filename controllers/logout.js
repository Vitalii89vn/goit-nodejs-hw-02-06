const User = require('../models/user');

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });
    // console.log(res)
};

module.exports = logout;