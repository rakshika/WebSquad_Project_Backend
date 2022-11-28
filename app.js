import express from 'express';
import cors from 'cors';
//const express = require('express')
import DonorController from "./controllers/donors/donor-controller.js";
const app = express()
app.use(cors())
app.use(express.json());

DonorController(app)
// app.get('/', (req, res) => {res.send('Web squad project')})
app.listen(4000)
// console.log("hello!");