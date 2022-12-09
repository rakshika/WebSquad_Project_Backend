import mongoose from "mongoose";

const donorsSchema = mongoose.Schema({
    userName: String,
    name: String,
    location: String,
    about : String,
    image: String,
    dp: String,
    followers: Number,
    following: Number,
    liked: Boolean,
    likes: Number,
    rating: Number,
    foodavailable: Object,
    foodavailabilityposts: String,
    storetimings: String,
    rewardpoints: Number,
    foodreviews: Object
}, {collection: 'donors'})

export default donorsSchema