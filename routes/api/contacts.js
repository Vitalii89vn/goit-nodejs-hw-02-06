const express = require('express');
const ctrl = require('../../controllers');
const router = express.Router();
  
  
router.get("/", ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', ctrl.addContact)

router.delete('/:id', ctrl.removeContact)

router.put('/:id', ctrl.updateContact)


module.exports = router
