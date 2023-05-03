const contacts = require('../models/contacts');
const {httpError} = require('../helpers')

const removeContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contacts.removeContact(id);
        if (!result) {
            throw httpError(404, "Not found");
        }
        res.status(200).json({
            message: "contact deleted"
        })
    } catch (error) {
        next(error)
    }
   
};

module.exports = removeContact;