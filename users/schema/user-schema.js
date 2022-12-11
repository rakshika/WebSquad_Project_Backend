import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    role: String
}, {collection: 'users'})

export default usersSchema;