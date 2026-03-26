const express = require("express")

const app = express()

app.get("/api",(req,res) => { 
    res.json({message:"Hello Word!"})
})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})


