import express from "express";

import { authentication } from '../Middleware/authentication.js';
import { instructorSale,instructorCart,instructorIncome } from '../Controller/instructorHomeController.js';
import {instructorProfile,instructorCourse} from '../Controller/instructorProfileController.js'

const instrctorRoute = express.Router();

instrctorRoute.get("/instructorSale",authentication, instructorSale);

instrctorRoute.get("/instructorCart",authentication, instructorCart);

instrctorRoute.get("/instructorIncome", authentication,instructorIncome);

instrctorRoute.get("/instructorProfile", authentication,instructorProfile);

instrctorRoute.get("/courseInfo", authentication,instructorCourse);

export default instrctorRoute;
