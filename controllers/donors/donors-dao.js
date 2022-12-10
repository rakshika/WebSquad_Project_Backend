import donorsModel from './donors-model.js';
export const findDonors = () => donorsModel.find();
export const findDonorByUserName = (did) => donorsModel.findOne({userName: did});
export const createDonor = (donor) => donorsModel.create(donor);
export const deleteDonor = (did) => donorsModel.deleteOne({_id: did});
export const updateDonor = (did, donor) => donorsModel.updateOne({_id: did}, {$set: donor});
export const findDonorsByCityName = (cityname) => donorsModel.find({location: cityname});
