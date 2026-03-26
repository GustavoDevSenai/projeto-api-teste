const express = require("express")

const app = express()

app.use(express.json())

const usuarios = []

app.get("/api",(req,res) => { 
    res.json({message:"Hello Word!"})
})

app.post("/cadastrar",(req,res)=>{
    const {nome, idade} = req.body

    usuarios.push({
        nome,
        idade
    })

    res.json({message: "Cadastro realizado com sucesso!"})

})

app.get("/usuarios",(req,res)=>{
    res.json(usuarios)
})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})


