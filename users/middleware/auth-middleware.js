import jwt, { decode } from 'jsonwebtoken';
import usersModel from '../users-model.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async(req, res, next) => {
    let token

    console.log("req.body")
    console.log(req.body)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, "abc123")
            console.log("decoded id") 
            console.log(decoded.id)
            req.user = await usersModel.findById(decoded.id).select('-password')
            console.log("req.user in middleware")
            console.log(req.user)
            next()
        } catch(error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})

export default protect;