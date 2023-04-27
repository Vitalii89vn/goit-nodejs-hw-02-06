const contacts = require('../models/contacts');
const {httpError} = require('../helpers')

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contacts.getContactById(id);
        if (!result) {
            throw httpError(404, "Not found")
        }
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
};
module.exports = getById;