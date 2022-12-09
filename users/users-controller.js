// import everyone from './users.js'
import * as dao from './users-dao.js'
import {findUserByCreds, findUserByUsername} from './users-dao.js'
import jwt from 'jsonwebtoken';
import { json } from 'express';
import protect from './middleware/auth-middleware.js'


let currentUser = null

// let users = everyone
const findAllUsers = async (req,res) => {
    const users = await dao.findAllUsers()
    res.json(users)
}

const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = await dao.findUserById(userId)
    //if (user != res.user) throw error
    if(user) {
        res.json(user);
        return
    }
    res.sendStatus(404)
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const user = await dao.createUser(newUser)
    res.json(user);
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await dao.deleteUser(userId) //req.user.id
    res.json(status);
}
  
const updateUser = async (req, res) => {
    const uid = req.params.uid
    const updates = req.body
    const status = await dao.updateUser(uid,  updates)
    res.json(status)
}

const register = async (req,res) => {
    const user = req.body
    const existingUser = await findUserByUsername(user.userName)
   
    if (existingUser) {
        res.sendStatus(403)
        return
    }

    const userToCreate = await dao.createUser(user)
    // req.session['currentUser'] = userToCreate
    currentUser = userToCreate
    console.log("userToCreate")
    console.log(userToCreate._id)
    res.json({
        userName: userToCreate.userName,
        email: userToCreate.email,
        token: generateToken(userToCreate._id)
    })
}

const login = async (req,res) => {
    const credentials = req.body
    const existingUser = await findUserByCreds(credentials.userName, credentials.password)
    if (!existingUser) {
        res.sendStatus(403)
        return
    }
    console.log("existingUser._id")
    console.log(existingUser._id)
    // req.session['currentUser'] = existingUser
    currentUser = existingUser
    console.log("req.user in login controller")
    console.log(req.user)
    res.json(existingUser)
}

// const profile = (req,res) => {
//     if (req.session['currentUser']) {
//         // res.send(req.session(['currentUser']))
//         res.send(currentUser)
//     }
//     else {
//         res.sendStatus(403)
//     }
// }

const logout = (req,res) => {
    req.session.destroy()
    res.sendStatus(200)
}

const usersController = (app) => {

    app.post('/users', createUser)
    app.get('/users', findAllUsers)
    app.get('/users/:uid', findUserById);
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)

    app.post('/register', protect, register)
    app.post('/login', protect, login)
    // app.post('/profile', profile)
    app.post('/logout', logout)
}

const generateToken = (id) => {
    return jwt.sign({id}, "abc123", {expiresIn: '30d'})
}

export default usersController;