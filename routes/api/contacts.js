const express = require('express');
const ctrl = require('../../controllers');
const router = express.Router();
const {contactSchema, updateFavoriteSchema} = require('../../schema');
const {validateBody, isValidId, validateFavorite} = require('../../middlewares')
  
router.get("/", ctrl.getAll)

router.get('/:id', isValidId, ctrl.getById)

router.post('/', validateBody(contactSchema), ctrl.addContact)

router.delete('/:id',isValidId, ctrl.removeContact)

router.put('/:id',isValidId, validateBody(contactSchema), ctrl.updateContact)

router.patch('/:id/favorite', isValidId, validateFavorite(updateFavoriteSchema), ctrl.updateStatusContact)

module.exports = router
