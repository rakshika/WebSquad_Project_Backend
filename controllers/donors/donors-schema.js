import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    name: String,
    location: String,
    about: String,
    image: String,
    dp: String,
    status: String,
    rating: Number,
    foodavailable: Object,
    storetimings: String,
    rewardpoints: Number
}, {collection: 'donors'});
export default schema;
