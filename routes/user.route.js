const router=require('express').Router();
const {getUserInfo,saveUserInfo,updateUserInfo,
    deleteUserInfo
}=require('../controller/user.controller')

router.get('/users',getUserInfo)
router.post('/saveUser',saveUserInfo)
router.put('/updateUser/:id',updateUserInfo)
router.delete("/deleteUser/:id",deleteUserInfo)
module.exports=router