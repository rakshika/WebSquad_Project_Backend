import usersModel from "./schema/users-model.js";
import donorsModel from "./schema/donors-model.js";
import customersModel from "./schema/customers-model.js";

export const createUser = (user) => {
    console.log('user in dao: ', user);
    if (user.role == 'DONOR') {
        donorsModel.create(user)
    } else if (user.role == 'CUSTOMER') {
        customersModel.create(user)
    }
    return usersModel.create(user)
}

export const findAllUsers = () => {
    return usersModel.find()
}

export const findUserById = (uid) => {
    return usersModel.findById(uid)
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
    return usersModel.deleteOne({_id: uid})
}

export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})