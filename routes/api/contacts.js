const express = require('express');
const ctrl = require('../../controllers');
const router = express.Router();
const {contactSchema} = require('../../schema');
const validateBody = require('../../middlewares/validateSchema')
  
  
router.get("/", ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', validateBody(contactSchema), ctrl.addContact)

router.delete('/:id', ctrl.removeContact)

router.put('/:id', validateBody(contactSchema), ctrl.updateContact)


module.exports = router
