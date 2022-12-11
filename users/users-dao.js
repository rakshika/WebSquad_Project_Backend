import usersModel from "./schema/users-model.js";
import donorsModel from "./schema/donors-model.js";
import customersModel from "./schema/customers-model.js";

export const createUser = (user) => {
    console.log('user in dao: ', user);
    if (user.role == 'DONOR') {
        user.profilePhoto = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2F&psig=AOvVaw3FWkfzEC7sBFqyOHlA9CsO&ust=1670833832239000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIiT3pmT8fsCFQAAAAAdAAAAABAE',
        user.coverPhoto = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fid%2F1316145932%2Fphoto%2Ftable-top-view-of-spicy-food.jpg%3Fs%3D612x612%26w%3Dgi%26k%3D20%26c%3Df-hk_ABcJZiEDNxUfAq-Tqxg0kdE01MbMWkBXhBobl0%3D&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Ffood&tbnid=bKsYIaQCVSeErM&vet=12ahUKEwi3tdnRlPH7AhUMw8kDHTPeCUcQMygKegUIARD2AQ..i&docid=cCZ9Q5pP-8Jt6M&w=612&h=408&q=food%20images&client=firefox-b-1-d&ved=2ahUKEwi3tdnRlPH7AhUMw8kDHTPeCUcQMygKegUIARD2AQ',
        user.description = "Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile. What does that cost? The point is, none of us can ever run out of something worthwhile to give.",
        user.storeTimings = "9am - 5pm",
        user.rating = 0.0,
        user.inventory = {"pizza": 2}
        donorsModel.create(user)
    } else if (user.role == 'CUSTOMER') {
        user.profilePhoto = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2F&psig=AOvVaw3FWkfzEC7sBFqyOHlA9CsO&ust=1670833832239000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIiT3pmT8fsCFQAAAAAdAAAAABAE'
        user.about = "There is no exercise better for the heart than reaching down and lifting people up."
        user.posts = []
        user.previousorderslist = {}
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