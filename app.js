import express from 'express';
import UserController from './controllers/users/userprofile-controller.js';
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
// const CONNECTION_STRING = 'mongodb://localhost:27017/hungersaviors'
// console.log(CONNECTION_STRING);
// mongoose.connect(CONNECTION_STRING);
mongoose.connect('mongodb://127.0.0.1:27017/hungersaviors');
UserController(app);
app.listen(4000);
console.log('hi');
