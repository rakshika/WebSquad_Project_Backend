import mongoose from 'mongoose';
import donorsSchema from './donors-schema.js';
const donorsModel = mongoose.model('DonorModel', donorsSchema);
export default donorsModel;