import usersModel from "./users-model.js";

export const createUser = (user) => {
    usersModel.create(user)
    return user
}

export const findAllUsers = () => {
    usersModel.find()
}

export const findUserById = (uid) => {
    usersModel.findById(uid)
}

export const findUserByUsername = (userName) => {
    const user = usersModel.findOne({userName})
    return user
}

export const findUserByCreds = (userName, password) => {
    const user = usersModel.findOne({userName, password},
        {password: false})
        return user
}

export const deleteUser = (uid) => {
    usersModel.deleteOne({_id: uid})
}

export const updateUser = (uid, userUpdate) => {
    usersModel.updateOne({_id: uid}, {$set: userUpdate})
}