import express from 'express'

import { adminIncome } from '../Controller/adminHomeController.js';

const adminRoute = express.Router();

//admin home page income status
adminRoute.get("/adminIncome", adminIncome);

export default adminRoute;