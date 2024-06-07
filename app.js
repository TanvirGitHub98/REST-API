const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const userRouter=require('./routes/user.route')

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/user',userRouter);
app.get('/',(req,res)=>
{
    res.send("I am Home Page")
});
app.use((req,res)=>
{
    res.send("404!!! Page Not Found")
})
module.exports=app;