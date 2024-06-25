/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextFunction, Request, Response } from "express"

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404)
  const error = new Error(`${req.originalUrl} Not Found`)
  next(error)
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "❌" : err.stack
  })
}
