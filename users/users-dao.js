import usersModel from "./users-model";

export const createUser = (user) => {
    usersModel.create(user)
}

export const findAllUsers = () => {
    usersModel.find()
}

export const findUserById = (uid) => {
    usersModel.findById(uid)
}

export const findUserByUsername = (uname) => {
    usersModel.findOne({uname})
}

export const findUserByCreds = (username, password) => {
    usersModel.findOne({username, password},
        {password: false})
}

export const deleteUser = (uid) => {
    usersModel.deleteOne({_id: uid})
}

export const updateUser = (uid, userUpdate) => {
    usersModel.updateOne({_id: uid}, {$set: userUpdate})
}