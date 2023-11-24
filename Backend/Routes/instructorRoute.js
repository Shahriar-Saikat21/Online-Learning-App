import express from "express";

import { authentication } from '../Middleware/authentication.js';
import { instructorSale,instructorCart,instructorIncome } from '../Controller/instructorHomeController.js';

const instrctorRoute = express.Router();

instrctorRoute.get("/instructorSale",authentication, instructorSale);

instrctorRoute.get("/instructorCart",authentication, instructorCart);

instrctorRoute.get("/instructorIncome", authentication,instructorIncome);

export default instrctorRoute;