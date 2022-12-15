import usersModel from "./schema/users-model.js";
import donorsModel from "./schema/donors-model.js";
import customersModel from "./schema/customers-model.js";

export const createUser = (user) => {
    if (user.role == 'DONOR') {
        user.profilePhoto = 'profilePhoto.png',
        user.coverPhoto = 'coverPhoto.jpg'
        user.description = "Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile. What does that cost? The point is, none of us can ever run out of something worthwhile to give.",
        user.storeTimings = "9am - 5pm",
        user.rating = 0.0,
        user.inventory = {"pizza": 0}
        donorsModel.create(user)
    } else if (user.role == 'CUSTOMER') {
        user.profilePhoto = 'profilePhoto.png'
        user.about = "There is no exercise better for the heart than reaching down and lifting people up."
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