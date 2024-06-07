
let userInfoModel=require('../models/user.model')
const {v4:uuidv4}=require('uuid')
exports.getUserInfo=(req,res)=>
    {
       res.status(200).json({
        userInfoModel
       })
    }
exports.saveUserInfo=(req,res)=>
    {
        let newUser={
            id:uuidv4(),
            name:req.body.name,
            age:req.body.age
        }
        userInfoModel.push(newUser);
        res.status(200).json({
            userInfoModel
        })
    }
    exports.updateUserInfo = (req, res) => {
        const userId = req.params.id;
        const { name, age } = req.body;
    
        // Find the user by ID
        let user = userInfoModel.find(user => user.id === userId);
    
        // If user is found, update its properties
        if (user) {
            user.name = name;
            user.age = age;
    
            res.status(200).json({
                message: "User updated successfully",
                userInfoModel
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    };
    exports.deleteUserInfo=(req,res)=>
    {
        const userId=req.params.id;
        userInfoModel=userInfoModel.filter((user)=>user.id!==userId)
        res.status(200).json(userInfoModel)


    }
    

    