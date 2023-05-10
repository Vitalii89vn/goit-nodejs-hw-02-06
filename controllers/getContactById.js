const {httpError} = require('../helpers');
const Contact = require('../models/contact');

const getById = async (req, res) => {
        const { id } = req.params;
        const result = await Contact.findById(id)
        if (!result) {
            throw httpError(404, "Not found")
        }
        res.status(200).json(result);

};
module.exports = getById;