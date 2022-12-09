import mongoose from 'mongoose';
import usersSchema from './customer-schema.js';

const usersModel = mongoose.model(
    'usersModel', usersSchema
)

export default usersModel;