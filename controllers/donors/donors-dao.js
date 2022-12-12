import donorsModel from "../../users/schema/donors-model.js";

export const findDonors = (donorStatus) => donorsModel.find({status: donorStatus});
export const findDonorByUserName = (did) => donorsModel.findOne({userName: did});
export const approveDonor = (did) => donorsModel.updateOne({_id: did}, {$set: {"status" : "Approved"}});
export const createDonor = (donor) => donorsModel.create(donor);
export const deleteDonor = (did) => donorsModel.deleteOne({_id: did});
export const updateDonor = (did, donor) => donorsModel.updateOne({_id: did}, {$set: donor});
export const findDonorsByCityName = (cityname) => donorsModel.find({location: cityname});
