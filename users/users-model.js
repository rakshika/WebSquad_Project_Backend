import mongoose from 'mongoose';
import usersSchema from './users-schema';

const usersModel = mongoose.model(
    'usersModel', usersSchema
)

export default usersModel;