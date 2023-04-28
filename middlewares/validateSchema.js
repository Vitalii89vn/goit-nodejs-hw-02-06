const {httpError} = require("../helpers");

const validateBody = schema => {
    const validateFunc = (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (error) {
            next(httpError(400, "missing required name field"));
        }
        next()
    }

    return validateFunc;
}

module.exports = validateBody;