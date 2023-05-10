const express = require('express');
const ctrl = require('../../controllers');
const router = express.Router();
const {contactSchema, updateFavoriteSchema} = require('../../schema');
const {validateBody, isValidId, validateFavorite, authenticate} = require('../../middlewares')
  
router.get("/", authenticate, ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(contactSchema), ctrl.addContact);

router.delete('/:id', authenticate, isValidId, ctrl.removeContact);

router.put('/:id', authenticate, isValidId, validateBody(contactSchema), ctrl.updateContact);

router.patch('/:id/favorite', authenticate, isValidId, validateFavorite(updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router
