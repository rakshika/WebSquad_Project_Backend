import customersModel from "../../users/schema/customers-model.js"


export const updateUser = (uid, userUpdates) =>
customersModel.updateOne({userName: uid},
        {$set: userUpdates})


export const findAllUsers = () =>
customersModel.find()

export const findUserById = (uid) =>
customersModel.findById(uid)

// export const findUserByUsername = (userName) =>
// customersModel.find({userName: userName})

export const findUserByUsername = (did) => customersModel.findOne({userName: did});


export const createUser = (user) =>
customersModel.create(user)

  