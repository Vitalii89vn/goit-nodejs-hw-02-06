const express = require('express');
const ctrl = require('../controllers');
const router = express.Router();
const {authSchema} = require('../schema');
const {validateBody, authenticate, upload} = require('../middlewares');

router.post('/register', validateBody(authSchema), ctrl.register);

router.post('/login', validateBody(authSchema), ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.get('/current', authenticate, ctrl.current);

router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar)

module.exports = router;