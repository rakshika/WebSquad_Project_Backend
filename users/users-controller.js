// import everyone from './users.js'
import * as dao from './users-dao.js'
import {findUserByCreds, findUserByUsername} from './users-dao.js'

let currentUser = null

// let users = everyone
const findAllUsers = async (req,res) => {
    const users = await dao.findAllUsers()
    res.json(users)
}

// const findUserById = (req, res) => {
//     const userId = req.params.uid;
//     const user = users
//       .find(u => u._id === userId);
//     res.json(user);
// }

const createUser = async (req, res) => {
    const newUser = req.body;
    const user = await dao.createUser(newUser)
    res.json(user);
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await dao.deleteUser(userId)
    res.json(status);
}
  
const updateUser = async (req, res) => {
    const userId = req.params.uid;
    const updates = req.body;
    const status = await dao.updateUser(userId, updates)
    res.json(status);
}

const register = async (req,res) => {
    const user = req.body
    const existingUser = await findUserByUsername(user.username)
    if (existingUser) {
        res.status(403)
        return
    }
    const userToCreate = await dao.createUser(user)
    currentUser = userToCreate
    res.json(userToCreate)
}

const login = async (req,res) => {
    const credentials = req.body
    const existingUser = await findUserByCreds(credentials.username, credentials.password)
    if (!existingUser) {
        res.sendStatus(403)
        return
    }
    currentUser = existingUser
    res.json(existingUser)
}

const profile = async (req,res) => {
    if (currentUser) {
        res.json(currentUser)
        return
    }
    res.sendStatus(403)
}

const logout = (req,res) => {
    currentUser = null
    res.sendStatus(200)
}

const usersController = (app) => {

    app.post('/users', createUser)
    app.get('/users', findAllUsers)
    // app.get('/users/:uid', findUserById);
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)

    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default usersController;