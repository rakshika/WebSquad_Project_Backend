import donors from './donors.js';
let donor = donors
// console.log(donor)

const DonorController = (app) => {
    app.get('/api/donorprofile', findDonors);
    app.get('/api/donorprofile/:did', findDonorById);
    app.post('/api/donorprofile', createDonor);
    app.delete('/api/donorprofile/:did', deleteDonor);
    app.put('/api/donorprofile/:did', updateDonor);
}

const findDonors = (req, res) => {
    res.json(donor)
}
const findDonorById = (req, res) => {
    const donorId = parseInt(req.params.did);
    const user = donor.find(d => d._id === donorId);
    res.json(user);
}
const createDonor = (req, res) => {
    const newDonor = req.body;
    newDonor._id = (new Date()).getTime() + '';
    donor.push(newDonor);
    res.json(newDonor);
}
const deleteDonor = (req, res) => {
    const donorId = parseInt(req.params['did']);
    donor = donor.filter(d => d._id !== donorId);
    res.sendStatus(200);
}
const updateDonor = (req, res) => {
    const donorId = parseInt(req.params['did']);
    const updates = req.body;
    donor = donor.map((d) => d._id === donorId ? {...d, ...updates} : d);
    res.sendStatus(200);
}

export default DonorController;