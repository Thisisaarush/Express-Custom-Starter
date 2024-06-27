import express from "express"
import { exampleController } from "../controllers/example.controller.js"

const router = express.Router()

router.route("/").get(exampleController)

export default router
