import donorsModel from "./donors-model.js";

export const findDonorsByCityName = (cityname) => donorsModel.find({location: cityname});

    // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();



export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});



export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})


        export const findAllUsers = () =>
        usersModel.find()

export const findUserById = (uid) =>
     usersModel.findById(uid)


export const createUser = (user) =>
    usersModel.create(user)

  