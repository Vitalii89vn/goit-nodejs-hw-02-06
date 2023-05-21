const getAll = require('./getAllContacts');
const getById = require('./getContactById');
const removeContact = require('./removeContact')
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const updateAvatar = require('./updateAvatar');
const updateSubscription = require('./updateSubscription')

const {ctrlWrapper} = require('../helpers');

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    removeContact: ctrlWrapper(removeContact),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    updateStatusContact: ctrlWrapper(updateStatusContact),
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    current: ctrlWrapper(current),
    updateAvatar: ctrlWrapper(updateAvatar),
    updateSubscription: ctrlWrapper(updateSubscription)
    
};