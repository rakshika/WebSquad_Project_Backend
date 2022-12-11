import mongoose from 'mongoose';
import customerSchema from './customer-schema.js';

const customersModel = mongoose.model(
    'customersModel', customerSchema
)

export default customersModel;