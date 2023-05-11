const jwt = require("jsonwebtoken");

const User = require("../models/user");

const {httpError} = require("../helpers");
require('dotenv').config();
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const {authorization = ''} = req.headers;
    const [bearer, token] = authorization.split(" ");
    if(bearer !== "Bearer") {
        next(httpError(401, "Not authorized"));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        console.log(id)
        const user = await User.findById(id);
console.log(user)
        if (!user || !user.token || user.token !== token) {
            next(httpError(401, "Not authorized")); 
        }
        req.user = user;
        
        next();
    }
    catch {
        next(httpError(401, "Not authorized"));
    }
}

module.exports = authenticate;