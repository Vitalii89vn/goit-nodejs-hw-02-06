const validateBody = require('./validateSchema');
const isValidId = require('./isValidId');
const validateFavorite = require('./validateFavorite');
const authenticate = require('./authenticate');

module.exports = {
    validateBody,
    isValidId,
    validateFavorite,
    authenticate
};