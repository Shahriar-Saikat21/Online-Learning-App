import express from 'express';

import {signupOtp,signupValidation} from '../Controller/signupController.js';
import {login,logout} from '../Controller/loginController.js'

const userRouter = express.Router();

userRouter.post('/signupOtp', signupOtp);

userRouter.post('/signupValidation', signupValidation);

userRouter.get('/login', login);

userRouter.get('/logout', logout);

userRouter.get('/forgotPassword', (req, res) => {});

userRouter.post('/resetPassword', (req, res) => {});

export default userRouter;