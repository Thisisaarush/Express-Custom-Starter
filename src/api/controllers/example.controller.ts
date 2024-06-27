import type { Request, Response } from "express"
import { exampleModel } from "../models/example.model.js"

export const exampleController = (req: Request, res: Response) => {
  const data = exampleModel()

  res.status(200).json({
    message: "Hello from the example controller",
    data: data
  })
}
