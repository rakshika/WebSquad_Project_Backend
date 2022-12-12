import jwt, { decode } from 'jsonwebtoken';
import usersModel from '../schema/users-model.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async(req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, "abcd1234")
            req.user = await usersModel.findOne({userName: decoded.userName}).select('-password')
            next()
        } catch(error) {
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