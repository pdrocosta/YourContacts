import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { clientRoutes, contactRoutes } from "./routes/routes"
const app = express()

app.use(express.json())
app.use("/clients", clientRoutes)
app.use("/contacts", contactRoutes)


export default app
