const {httpError} = require("../helpers");

const validateBody = schema => {
    const validateFunc = (req, res, next) => {
        const { error } = schema.validate(req.body);
        
        if (error && error.details[0].type === 'any.required') {
            const missedField = error.details[0].context.key.toUpperCase();
            next(httpError(400, `missing required field ${missedField}`));
        };
        if (!Object.keys(req.body).length) {
            throw httpError(400, 'missing fields');
        };
        if (error) {
            next(httpError(400, `${error.name}: field ${error.details[0].context.key.toUpperCase()} is not valid`))
        };
        next()
    }
    return validateFunc;
};

module.exports = validateBody;
