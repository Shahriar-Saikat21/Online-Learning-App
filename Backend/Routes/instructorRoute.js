import express from "express";
import upload from '../Middleware/uploadImage.js';
import uploadVideo from '../Middleware/uploadVideo.js';
import { authentication } from '../Middleware/authentication.js';
import { instructorSale,instructorCart,instructorIncome,withdrawReq,withdrawReqHistory } from '../Controller/instructorHomeController.js';
import {instructorProfile,instructorCourse,changeProfilePic,editProfileInfo} from '../Controller/instructorProfileController.js'
import { createCourse,getCourseCategory,editCourseHead } from '../Controller/instructorCreateController.js';
import {getCourseHead,addModule,getModule,deleteCourse} from '../Controller/instructorCourseController.js';

const instrctorRoute = express.Router();

instrctorRoute.get("/instructorSale",authentication, instructorSale);

instrctorRoute.get("/instructorCart",authentication, instructorCart);

instrctorRoute.get("/instructorIncome", authentication,instructorIncome);

instrctorRoute.get("/instructorProfile", authentication,instructorProfile);

instrctorRoute.get("/courseInfo", authentication,instructorCourse);

instrctorRoute.post("/createCourse", authentication,upload.single("image"),createCourse);

instrctorRoute.get("/instructorCategory", authentication,getCourseCategory);

instrctorRoute.put("/profileChangePic", authentication,upload.single("image"),changeProfilePic);

instrctorRoute.put("/editCourseHead", authentication,editCourseHead);

instrctorRoute.get("/getCourseHead",getCourseHead);

instrctorRoute.post("/addModule",authentication,uploadVideo.single("video"),addModule);

instrctorRoute.get("/getModule",getModule);

instrctorRoute.get("/deleteCourse",authentication,deleteCourse);

instrctorRoute.put("/editProfileInfo",authentication,editProfileInfo);

instrctorRoute.post("/withdrawRequest",authentication,withdrawReq);

instrctorRoute.get('/withdarwHistory',authentication,withdrawReqHistory);

export default instrctorRoute;
