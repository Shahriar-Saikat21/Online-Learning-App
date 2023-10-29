import express from "express";

import { instructorSale,instructorCart,instructorIncome } from '../Controller/instructorHomeController.js';

const instrctorRoute = express.Router();

instrctorRoute.get("/instructorSale", instructorSale);

instrctorRoute.get("/instructorCart", instructorCart);

instrctorRoute.get("/instructorIncome", instructorIncome);

export default instrctorRoute;