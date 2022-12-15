import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    profilePhoto: String,
    firstName: String,
    lastName: String,
    about: String,
    location: String,
    posts: Array,
    phone: String,
    email: {type: String, required: true, unique:true},
    role: String,
    dateOfBirth: Date,
}, {collection: 'customers'})

export default customerSchema;