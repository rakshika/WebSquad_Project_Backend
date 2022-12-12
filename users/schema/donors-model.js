import mongoose from 'mongoose';
import donorSchema from './donor-schema.js';

const donorsModel = mongoose.model(
    'donorsModel', donorSchema
)

export default donorsModel