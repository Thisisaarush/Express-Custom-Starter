import express from "express"
import example from "./routes/example.route.js"

const router = express.Router()

// Routes under /api/v1
router.get("/", (req, res) => {
  res.json({
    message: "Hello /api/v1"
  })
})

router.use("/example", example)

export default router
