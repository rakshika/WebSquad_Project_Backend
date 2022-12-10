import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/hungersaviors');
import DonorController from "./controllers/donors/donor-controller.js";
import CustomerController from './controllers/customers/customers-controller.js';
import SearchController from './controllers/search/search-controller.js';
const app = express()
app.use(cors())
app.use(express.json());
SearchController(app)
CustomerController(app)
DonorController(app)
// app.get('/', (req, res) => {res.send('Web squad project')})
app.listen(4000)
// console.log("hello!");