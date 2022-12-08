import usersModel from "./users-model.js";


export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})


        export const findAllUsers = () =>
        usersModel.find()

export const findUserById = (uid) =>
     usersModel.findById(uid)


export const createUser = (user) =>
    usersModel.create(user)

  