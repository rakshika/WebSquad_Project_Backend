import mongoose from "mongoose";

const customersSchema = mongoose.Schema({
    username: String,
    password: String,
  profilephoto: String,
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
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  dateofbirth: String,
  dateofjoining: String,
  previousorders: String,
  favorites: String,
  previousorderslist: String,
  favoriteslist: String
}, {collection: 'customers'})

export default customersSchema