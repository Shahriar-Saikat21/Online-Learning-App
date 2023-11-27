import express from "express";
import upload from '../Middleware/uploadImage.js';
import { authentication } from '../Middleware/authentication.js';
import { instructorSale,instructorCart,instructorIncome } from '../Controller/instructorHomeController.js';
import {instructorProfile,instructorCourse} from '../Controller/instructorProfileController.js'
import { createCourse,getCourseCategory } from '../Controller/instructorCreateController.js';

const instrctorRoute = express.Router();

instrctorRoute.get("/instructorSale",authentication, instructorSale);

instrctorRoute.get("/instructorCart",authentication, instructorCart);

instrctorRoute.get("/instructorIncome", authentication,instructorIncome);

instrctorRoute.get("/instructorProfile", authentication,instructorProfile);

instrctorRoute.get("/courseInfo", authentication,instructorCourse);

instrctorRoute.post("/createCourse", authentication,upload.single("image"),createCourse);

instrctorRoute.get("/instructorCategory", authentication,getCourseCategory);

export default instrctorRoute;
