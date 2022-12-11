import mongoose from "mongoose";

const donorSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePhoto: String,
    name: String,
    lastName: String,
    occupation: String,
    about: String,
    website: String,
    location: String,
    companyname: String,
    position: String,
    followers: Number,
    following: Number,
    liked: Boolean,
    likes: Number,
    posts: String,
    phone: String,
    status: {type: String, default: "Pending"},
    email: {type: String, required: true, unique:true},
    role: String,
    dateOfBirth: Date,
    dateofjoining: String,
    previousorderslist: String,
    favoriteslist: String, 
}, {collection: 'donors'})

export default donorSchema;