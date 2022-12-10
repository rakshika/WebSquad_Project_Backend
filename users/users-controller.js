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
    res.json({
        userName: userToCreate.userName,
        email: userToCreate.email,
        token: generateToken(userToCreate._id),
        role: userToCreate.role
    })
}

const login = async (req,res) => {
    const credentials = req.body
    const existingUser = await findUserByCreds(credentials.userName, credentials.password)
    if (!existingUser) {
        res.sendStatus(403)
        return
    }
    // req.session['currentUser'] = existingUser
    currentUser = existingUser
    res.json({userName: existingUser.userName,
        email: existingUser.email,
        token: generateToken(existingUser._id),
        role: existingUser.role})
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

    app.post('/register', register)
    app.post('/login', login)
    // app.post('/profile', profile)
    app.post('/logout', logout)
}

const generateToken = (id) => {
    return jwt.sign({id}, "abc123", {expiresIn: '30d'})
}

export default usersController;