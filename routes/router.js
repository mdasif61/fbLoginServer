const express=require('express');
const { addUser } = require('../controllers/addUserControll');

const router=express.Router();

router.post('/user',addUser)

module.exports=router;