const express = require('express');
const ctrl = require('../../controllers');
const router = express.Router();
const {authSchema} = require('../../schema');
const {validateBody} = require('../../middlewares');

router.post('/register', validateBody(authSchema), ctrl.register);

router.post('/login', validateBody(authSchema), ctrl.login)




module.exports = router;