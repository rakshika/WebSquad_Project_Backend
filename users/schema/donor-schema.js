import mongoose from "mongoose";

const donorSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    profilePhoto: String,
    coverPhoto:String,
    name: String,
    description: String,
    location: String,
    phone: String,
    status: {type: String, default: "Pending"},
    email: {type: String, required: true, unique:true},
    role: String,
    storeTimings: String,
    inventory: {type: Object, default: {}},
    rating: String, likes: Number, liked: Boolean
}, {collection: 'donors'})

export default donorSchema;