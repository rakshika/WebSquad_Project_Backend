import customersModel from "./customers-model.js";


export const updateUser = (uid, userUpdates) =>
customersModel.updateOne({_id: uid},
        {$set: userUpdates})


export const findAllUsers = () =>
customersModel.find()

export const findUserById = (uid) =>
customersModel.findById(uid)

export const findUserByUsername = (username) =>
customersModel.find({username: username})

export const createUser = (user) =>
customersModel.create(user)

  