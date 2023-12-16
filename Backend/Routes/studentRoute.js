import express from 'express'
import upload from '../Middleware/uploadImage.js';
import { authentication } from '../Middleware/authentication.js';

import { studentProfile,studentCart } from '../Controller/studentProfileController.js';

const studentRoute = express.Router();

studentRoute.get("/studentProfile",authentication,studentProfile );

studentRoute.get('/studentCart',authentication,studentCart);

export default studentRoute;