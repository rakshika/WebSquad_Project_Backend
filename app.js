import UserController from './controllers/users/userprofile-controller.js';
import SearchController from './controllers/search/search-controller.js';
import express from "express"
import mongoose from 'mongoose'
import usersController from "./users/users-controller.js"
import cors from 'cors'
import DonorController from "./controllers/donors/donor-controller.js";
mongoose.connect('mongodb://localhost:27017/WebSquad');

const app = express()
app.use(cors())
app.use(express.json());

SearchController(app);
DonorController(app)
usersController(app)
app.listen(4000)
