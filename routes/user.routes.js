const express = require('express');

const router = express.Router();

const {getAllUsers,CreateUser,UpdateUser,DeleteUser} = require('../controllers/user.controller');


router.get('/',getAllUsers);
router.post('/',CreateUser);
router.put('/:id',UpdateUser);
router.delete('/:id',DeleteUser);



module.exports = router;