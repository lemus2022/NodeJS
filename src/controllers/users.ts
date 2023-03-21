import express , {Request, Response} from 'express';
const login =  (_: Request, res: Response) => {
    res.status(200).json({message: 'Login Succes'});

};

const register = (_: Request, res: Response) => {
    res.status(200).json({message: 'Register Succes'});
};

export default {login, register}