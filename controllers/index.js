const getAll = require('./getAllContacts');
const getById = require('./getContactById');
const removeContact = require('./removeContact')
const addContact = require('./addContact');
const updateContact = require('./updateContact')

module.exports = {
    getAll,
    getById,
    removeContact,
    addContact,
    updateContact
};