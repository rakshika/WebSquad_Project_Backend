import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    role: String,
    status: {type: String, default:"Pending"}
}, {collection: 'users'})

export default usersSchema;