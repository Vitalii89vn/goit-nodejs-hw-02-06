const {httpError} = require("../helpers");

const validateFavorite = schema => {
    const validateFunc = (req, res, next) => {
        const { error } = schema.validate(req.body);
         if (!Object.keys(req.body).length) {
            throw httpError(400, "missing field favorite ");
        };
        if (error) {
            const missedField = error.details[0].context.key.toUpperCase();
            next(httpError(400, `missing required ${missedField} field`));
        }
        next()
    }
    return validateFunc;
}

module.exports = validateFavorite;
