import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // profilePhoto: String,
    firstName: String,
    lastName: String,
    // occupation: String,
    // about: String,
    // website: String,
    location: String,
    // companyname: String,
    // position: String,
    // followers: Number,
    // following: Number,
    // liked: Boolean,
    // likes: Number,
    // posts: String,
    phone: String,
    email: {type: String, required: true, unique:true},
    role: String,
    dateOfBirth: Date,
    // dateofjoining: String,
    // previousorderslist: String,
    // favoriteslist: String, 
    // role: {type: String, enum: ['ADMIN', 'CUSTOMER', 'DONOR']}
}, {collection: 'users'})

export default usersSchema;