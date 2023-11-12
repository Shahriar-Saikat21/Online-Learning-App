import express from 'express'

import upload from '../Middleware/uploadImage.js';
import { adminIncome,adminCategory,adminSale } from '../Controller/adminHomeController.js';
import {newsTableController,updateNewsStatus,deleteNews,uploadNews} from '../Controller/adminNewsController.js';
import {addCategory,showCategory} from '../Controller/adminCategoryController.js';

const adminRoute = express.Router();

//admin home page income status
adminRoute.get("/adminIncome", adminIncome);

//admin home page category status
adminRoute.get("/adminCategory", adminCategory);

//admin home page sales status
adminRoute.get("/adminSales", adminSale);

//admin news table views
adminRoute.get("/adminAllNews", newsTableController);

//admin upload news
adminRoute.post("/uploadNews", upload.single("image"),uploadNews);

//admin update news status
adminRoute.put("/updateNewsStatus", updateNewsStatus);

//admin delete news
adminRoute.get("/deleteNews/:id/:pic", deleteNews);

//admin add category
adminRoute.post("/addCategory", addCategory);

//admin show category
adminRoute.get("/showCategory", showCategory);

export default adminRoute;