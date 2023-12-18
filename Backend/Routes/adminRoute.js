import express from 'express'

import upload from '../Middleware/uploadImage.js';
import { adminIncome,adminCategory,adminSale,adminWithdarwHistory,updateWithdrawStatus } from '../Controller/adminHomeController.js';
import {newsTableController,updateNewsStatus,deleteNews,uploadNews} from '../Controller/adminNewsController.js';
import {addCategory,showCategory,adminChangePassword} from '../Controller/adminCategoryController.js';
import { authentication } from '../Middleware/authentication.js';

const adminRoute = express.Router();

//admin home page income status
adminRoute.get("/adminIncome",authentication, adminIncome);

//admin home page category status
adminRoute.get("/adminCategory",authentication, adminCategory);

//admin home page sales status
adminRoute.get("/adminSales", authentication,adminSale);

//admin news table views
adminRoute.get("/adminAllNews", authentication,newsTableController);

//admin upload news
adminRoute.post("/uploadNews",authentication, upload.single("image"),uploadNews);

//admin update news status
adminRoute.put("/updateNewsStatus",authentication, updateNewsStatus);

//admin delete news
adminRoute.get("/deleteNews/:id/:pic",authentication, deleteNews);

//admin add category
adminRoute.post("/addCategory", authentication,addCategory);

//admin show category
adminRoute.get("/showCategory", authentication,showCategory);

//admin change password
adminRoute.put("/adminChangePassword", authentication,adminChangePassword);

adminRoute.get("/AdminWithdarwHistory", authentication,adminWithdarwHistory);

adminRoute.get("/updateWithdrawStatus", authentication,updateWithdrawStatus);

export default adminRoute;