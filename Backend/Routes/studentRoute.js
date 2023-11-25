import express from 'express'
import upload from '../Middleware/uploadImage.js';
import { authentication } from '../Middleware/authentication.js';

import { studentProfile } from '../Controller/studentProfileController.js';

const studentRoute = express.Router();

studentRoute.get("/studentProfile",authentication,studentProfile );

export default studentRoute;