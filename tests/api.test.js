const request = require("supertest")
const express = require("express")

const app = express()

app.get("/api",(req,res)=>{
    res.json({message:"Hello Word!"})
})

describe("GET /api", () => {
    it("deve retornar Hello Word", async () => {
        const response = await request(app).get("/api")

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("Hello Word!")
    })
})