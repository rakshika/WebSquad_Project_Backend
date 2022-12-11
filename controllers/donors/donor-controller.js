import * as donorsDao from '../donors/donors-dao.js';
import protect from '../../users/middleware/auth-middleware.js';

const findDonors = async (req, res) => {
    const donorStatus = req.params.status;
    const donors = await donorsDao.findDonors(donorStatus)
    res.json(donors);
}
const findDonorByUsername = async (req, res) => {
    const donorIdToUpdate = req.params.did;
    const donor = await donorsDao.findDonorByUserName(donorIdToUpdate);
    res.json(donor);
}
const approveDonor = async (req, res) => {
    const donorIdToUpdate = req.params.did;
    const status = await donorsDao.approveDonor(donorIdToUpdate);
    res.json(status);
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
    app.get('/api/donors/status/:status', findDonors);
    app.get('/api/donors/:did', findDonorByUsername);
    // app.post('/api/donors', createDonor);
    app.patch('/api/donors/approve/:did', approveDonor);
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