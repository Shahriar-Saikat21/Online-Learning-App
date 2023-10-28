import express from 'express'

import { adminIncome,adminCategory,adminSale } from '../Controller/adminHomeController.js';

const adminRoute = express.Router();

//admin home page income status
adminRoute.get("/adminIncome", adminIncome);

//admin home page category status
adminRoute.get("/adminCategory", adminCategory);

//admin home page sales status
adminRoute.get("/adminSales", adminSale);

export default adminRoute;