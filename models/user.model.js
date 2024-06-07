
const {v4:uuidv4}=require('uuid')
let userInfoModel=[
    {
        id: uuidv4(),
        name:"Tanvir",
        age:90

    },
    {
        id: uuidv4(),
        name:"Rabiul",
        age:80
    }
]
module.exports=userInfoModel