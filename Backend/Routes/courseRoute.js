import express from 'express';
import { authentication } from '../Middleware/authentication.js';

import {getCourseStatusInstructor,getCourseStatusStudent} from '../Controller/courseController.js';
import {createCheckoutSession,sellSucess} from '../Controller/paymentController.js';

const courseRouter = express.Router();

courseRouter.get('/getCourseStatusInstructor',authentication, getCourseStatusInstructor);

courseRouter.get('/getCourseStatusStudent',authentication,getCourseStatusStudent);

courseRouter.post('/create-checkout-session',authentication,createCheckoutSession);

courseRouter.post('/sellSucess',authentication,sellSucess);

export default courseRouter;