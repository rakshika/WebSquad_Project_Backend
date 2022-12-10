import donorsModel from './donors-model.js';
export const findDonors = () => donorsModel.find();
export const findDonorById = (did) => donorsModel.findById({_id: did});
export const createDonor = (donor) => donorsModel.create(donor);
export const deleteDonor = (did) => donorsModel.deleteOne({_id: did});
export const updateDonor = (did, donor) => donorsModel.updateOne({_id: did}, {$set: donor});
<<<<<<< HEAD
=======
export const findDonorsByCityName = (cityname) => donorsModel.find({location: cityname});

>>>>>>> c5093ca (integrated home, profile, search components)
