const User = require('../models/user');
const {httpError} = require('../helpers')

const verifyEmail = async (res, req) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user) {
        throw httpError(404, "User not found");
        
    }
    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: null });

    res.status(200).json({
        message: 'Verification successful'
    })
};

module.exports = verifyEmail