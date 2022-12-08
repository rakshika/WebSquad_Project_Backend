import express from "express"
import mongoose from 'mongoose'
import usersController from "./users/users-controller.js"
import cors from 'cors'

mongoose.connect('mongodb://localhost:27017/WebSquad');

const app = express()
app.use(cors())
app.use(express.json());
usersController(app)
app.listen(4000)

