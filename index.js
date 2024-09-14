const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db');
const router=require('./routes/router');
const port=process.env.PORT|| 5000;
require('dotenv').config();

connectDB();

const app=express()
app.use(cors());
app.use(express.json());
app.use("/api/login",router)

app.get('/',(req,res)=>{
    res.send("Server start")
})

app.listen(port,()=>{
    console.log("Server is running :", port)
})