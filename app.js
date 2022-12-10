import SearchController from './controllers/search/search-controller.js';
import express from "express"
import mongoose from 'mongoose'
import usersController from "./users/users-controller.js"
import cors from 'cors'
import CustomerController from './controllers/customers/customers-controller.js';
import DonorController from "./controllers/donors/donor-controller.js";
mongoose.connect('mongodb://localhost:27017/WebSquad');

import OrderController from "./controllers/orders/order-controller.js";
const app = express()
app.use(cors())
app.use(express.json());

SearchController(app);
OrderController(app)
DonorController(app)
usersController(app)
CustomerController(app)
app.listen(4000)
