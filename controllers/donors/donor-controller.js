// import donors from './donors.js';
// let donor = donors
// console.log(donor)
import * as donorsDao from '../donors/donors-dao.js';

const findDonors = async (req, res) => {
    const donors = await donorsDao.findDonors()
    res.json(donors);
}
const findDonorById = async (req, res) => {
    const donorIdToUpdate = req.params.did;
    const donor = await donorsDao.findDonorById(donorIdToUpdate);
    res.json(donor);
}
const createDonor = async (req, res) => {

}
const updateDonor = async (req, res) => {
    const donorIdToUpdate = req.params.did;
    const updates = req.body;
    const status = await donorsDao.updateDonor(donorIdToUpdate, updates);
    res.json(status);
}
const deleteDonor = async (req, res) => {
    const donorIdToUpdate = req.params.did;
    const status = await donorsDao.deleteDonor(donorIdToUpdate);
    res.json(status);
}

const DonorController = (app) => {
    app.get('/api/donors', findDonors);
    app.get('/api/donors/:did', findDonorById);
    app.post('/api/donors', createDonor);
    app.delete('/api/donors/:did', deleteDonor);
    app.put('/api/donors/:did', updateDonor);
}

// const findDonors = (req, res) => {
//     res.json(donor)
// }
// const findDonorById = (req, res) => {
//     const donorId = parseInt(req.params.did);
//     const user = donor.find(d => d._id === donorId);
//     res.json(user);
// }
// const createDonor = (req, res) => {
//     const newDonor = req.body;
//     newDonor._id = (new Date()).getTime() + '';
//     donor.push(newDonor);
//     res.json(newDonor);
// }
// const deleteDonor = (req, res) => {
//     const donorId = parseInt(req.params['did']);
//     donor = donor.filter(d => d._id !== donorId);
//     res.sendStatus(200);
// }
// const updateDonor = (req, res) => {
//     const donorId = parseInt(req.params['did']);
//     const updates = req.body;
//     donor = donor.map((d) => d._id === donorId ? {...d, ...updates} : d);
//     res.sendStatus(200);
// }

export default DonorController;