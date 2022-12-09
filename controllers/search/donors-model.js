import mongoose from "mongoose";
import donorsSchema from "./donors-schema.js";

const donorsModel = mongoose.model('DonorsModel', donorsSchema)

export default donorsModel