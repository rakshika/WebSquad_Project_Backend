import mongoose from "mongoose";
import customersSchema from "./customers-schema.js";

const customersModel = mongoose.model('CustomersModel', customersSchema)

export default customersModel