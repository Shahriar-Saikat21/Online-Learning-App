import express from 'express';
import { authentication } from '../Middleware/authentication.js';

import {getCourseStatusInstructor,getCourseStatusStudent} from '../Controller/courseController.js';

const courseRouter = express.Router();

courseRouter.get('/getCourseStatusInstructor',authentication, getCourseStatusInstructor);

courseRouter.get('/getCourseStatusStudent',authentication,getCourseStatusStudent);

export default courseRouter;