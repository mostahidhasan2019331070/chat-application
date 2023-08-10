const express = require("express")
const app1 = express();
const { chats } = require("./data/data")
PORT=process.env.PORT || 5000
app1.get("/",(req,res)=>
{
    res.send("API is running")
})
app1.listen(PORT,()=>{
    console.log(`the port number is ${PORT}`);
})
