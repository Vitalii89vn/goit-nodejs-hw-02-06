const User = require('../models/user');
const {httpError} = require('../helpers');

const updateSubscription = async (req, res) => {
    const { subscription } = req.body;
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate(_id, { subscription });
  
    if (!result) {
        throw httpError(404, "Not found");
    };
   
    res.status(200).json({subscription});
}
module.exports = updateSubscription