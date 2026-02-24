const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user.controller');


router.get('/',UserController.getAllUsers);
router.post('/',UserController.CreateUser);
router.put('/:id',UserController.UpdateUser);
router.delete('/',UserController.DeleteUser);



module.exports = router;