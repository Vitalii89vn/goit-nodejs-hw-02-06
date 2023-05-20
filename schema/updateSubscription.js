
const Joi = require("joi");

const updateSubscription = Joi.object({
    subscription: Joi.valid("starter", "pro", "business").required(),
    })

module.exports = updateSubscription