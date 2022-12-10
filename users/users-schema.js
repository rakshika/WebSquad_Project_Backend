import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: String,
    email: {type: String, required: true, unique:true},
    doc: Date, 
    type: {type: String, enum: ['CUSTOMER', 'DONOR']}
}, {collection: 'users'})

export default usersSchema;