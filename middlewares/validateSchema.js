const {httpError} = require("../helpers");

const validateBody = schema => {
    const validateFunc = (req, res, next) => {
        const { error } = schema.validate(req.body);
        console.log(error)
         if (!Object.keys(req.body).length) {
            throw httpError(400, "missing fields");
        };
         if (error && error.details[0].type === 'any.required') {
            const missedField = error.details[0].context.key.toUpperCase();
            next(httpError(400, `missing required ${missedField} field`));
        };
        if (error) {
            next(httpError(400, "Помилка від Joi або іншої бібліотеки валідації"))
        };
       
        next()
    }
    return validateFunc;
}

module.exports = validateBody;
