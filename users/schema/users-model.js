import mongoose from 'mongoose';
import usersSchema from './user-schema.js';

const usersModel = mongoose.model(
    'usersModel', usersSchema
)

export default usersModel