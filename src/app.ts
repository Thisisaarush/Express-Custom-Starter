import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import "dotenv/config"
import * as middllewares from "./middlewares.js"
import api from "./api/index.js"

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(middllewares.errorHandler)
app.use(middllewares.notFoundHandler)

// Base Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  })
})

// Routes for /api/v1
app.get("/api/v1", api)

export default app
