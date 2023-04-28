const contacts = require('../models/contacts');

const addContact = async (req, res, next) => {
    try {
        const result = contacts.addContact(req.body);
        res.status(201).json({data: result})

    } catch (error) {
        next(error)
    }
};

    module.exports = addContact;