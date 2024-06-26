import express from "express"

const router = express.Router()

// Routes under /api/v1
router.get("/", (req, res) => {
  res.json({
    message: "Hello /api/v1"
  })
})

export default router
