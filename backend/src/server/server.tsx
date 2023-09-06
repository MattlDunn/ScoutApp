import express, { Request, Response } from "express"
import connectToDb from "./db"

const app = express()

const PORT = 3000

connectToDb()

app.get("/ping", (request: Request, response: Response) => {
    response.send("Pong")
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
