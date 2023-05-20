const Joi = require("joi");

const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.valid("starter", "pro", "business")
});
module.exports = authSchema;