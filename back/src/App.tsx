import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { clientRoutes, contactRoutes, loginRoute} from "./routes/routes"


const app = express()

app.use(express.json())
app.use("/clients", clientRoutes)
app.use("/contacts", contactRoutes)
app.use("/login", loginRoute)

export default app
