const {httpError} = require("../helpers");

const validateBody = schema => {
    const validateFunc = (req, res, next) => {
        // const err = schema.validate(body);
        const { error} = schema.validate(req.body);
        // const missedField = error.message.split(' ')[0].slice(1).slice(0,-1).toUpperCase();
       
        if (!Object.keys(req.body).length) {
            throw httpError(400, "missing fields");
        };
        if (error) {
            const missedField = error.message.split(' ')[0].slice(1).slice(0,-1).toUpperCase();
            next(httpError(400, `missing required ${missedField} field`));
        }
        next()
    }

    return validateFunc;
}

module.exports = validateBody;

// {\"value\":{\"name\":\"iii\"},
// \"error\":{\"_original\":{\"name\":\"iii\"},
// \"details\":
// [
// {
// \"message\":\"\\\"email\\\" is required\",
// \"path\":[\"email\"],
// \"type\":\"any.required\",
// \"context\":{\"label\":\"email\",\"key\":\"email\"}}]
// }}