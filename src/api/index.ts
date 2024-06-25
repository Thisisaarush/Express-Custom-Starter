import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    message: "Hello /api/v1"
  })
})

// Routes under /api/v1
// router.use("/example", exampleRouter)

export default router
