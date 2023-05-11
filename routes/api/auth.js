const express = require('express');
const ctrl = require('../../controllers');
const router = express.Router();
const {authSchema} = require('../../schema');
const {validateBody, authenticate} = require('../../middlewares');

router.post('/register', validateBody(authSchema), ctrl.register);

router.post('/login', validateBody(authSchema), ctrl.login)

router.post('/logout', authenticate, ctrl.logout)



module.exports = router;