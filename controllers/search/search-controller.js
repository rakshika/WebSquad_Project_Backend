import * as donorsDao from '../donors/donors-dao.js';

const findDonorsByCityName = async(req, res) =>{
    const cityname = req.params.cityname
    console.log(cityname);
    const donors= await donorsDao.findDonorsByCityName(cityname)
    res.json(donors)
}

const SearchController =(app) =>{
    app.get('/api/search/city/:cityname', findDonorsByCityName);
}

export default SearchController;