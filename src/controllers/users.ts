import express, {Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { User } from '../models/users';

const login = async (req: Request, res: Response ) => {
    const {username, password} = req.body;
    if(!username || !password) {
        res.status(400).json({
            message: 'Login Failed'
        });
        return;
    }

    const user: User = {
        username,
        password: '$2b$10$ppFluV/mbBO7Hko1aB6XQONOhvCTPnGidItwchcC2/M1L.8bQ/BfW'
    };

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword) {
        res.status(400).json({
            message: 'Login Failed'
        });
        return;
    }

    const token = jwt.sign({username}, config.secrets.token);

    return res.status(200).json({
        message: 'Login Sucess',
        token
    });
};

const register = async (req: Request, res: Response ) => {

    const  {username, password} = req.body;
    if(username === '' || password === '' || !username || !password) {
        res.status(400).json({
            message: 'Username or password cannot be empty'
        });
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    //TODO validate username doesnt exist
    //TODO stre username and password into DB

    return res.status(201).json({
        message: 'Register Sucess',
        data: {
            username,
            password: passwordHash
        }
    });

    //res.status(200).json({message: 'Register Sucess'});
};

export default {login, register};