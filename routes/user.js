const express= require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("this is the data")
})

router.post("/",(req,res)=>{
    res.send("user created")
})

module.exports=router