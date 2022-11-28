import express from "express"
import usersController from "./users/users-controller.js"

const app = express()
app.use(express.json());
// app.get('/', (req, res) => {res.send('Web squad project')})
usersController(app)
app.listen(4000)