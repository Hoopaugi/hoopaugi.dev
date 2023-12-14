import express, { Express } from "express"

import healthRouter from "./health"

const app: Express = express()

app.use('/ping', healthRouter)

export default app
