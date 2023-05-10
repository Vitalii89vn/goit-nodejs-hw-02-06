const {httpError} = require("../helpers");

const validateFavorite = schema => {
    const validateFunc = (req, res, next) => {
         if (!Object.keys(req.body).length) {
            throw httpError(400, "missing field favorite ");
        };
        next()
    }
    return validateFunc;
}

module.exports = validateFavorite;
