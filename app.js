const express= require('express')
const router = express.Router()
const app= express()
const port = 7000

// const userRoute=require("./routes/user")
// const authRoute=require("./routes/auth")
const dbRoute=require("./database/user-db")

// app.use('/user',userRoute)
// app.use('/auth',authRoute)
app.use('/user-db',dbRoute)

app.listen(port,()=>{
    console.log('server is running')
})