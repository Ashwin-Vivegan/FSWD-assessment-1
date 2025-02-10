const express = require('express')
const port = 3434
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({message:"Hello world"})
})
 
app.post('/signup',(req,res)=>{
    try{
    const {Username,Email,Password}=req.body
    if (!Username){
        return res.status(400).json({message:"Username cannot be empty"})
    }
    if (!Email){
        return res.status(400).json({message:"Email cannot be empty"})
    }
    if (!Password){
        return res.status(400).json({message:"Password cannot be empty"})
    }
    const leng = Password.length
    if(leng<8 || leng>16){
        res.status(400).json({message:"Password length should be greater than 8 or lesser than 16"})
    }
return res.status({message:"signup successful"})
    }
    catch(e){
        console.log(e.message)
    }
})

app.listen(port,()=>{
    console.log(`Successfully connected at ${port}`)
})