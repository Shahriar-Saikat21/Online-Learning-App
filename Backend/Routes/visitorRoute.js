import express from 'express';

import { displayNews,seePopularCourse,searchCourse } from '../Controller/visitorHomeController.js';

const visitorRouter = express.Router();

visitorRouter.get('/displayNews', displayNews);

visitorRouter.get('/seePopularCourse',seePopularCourse);

visitorRouter.get('/serachCourse',searchCourse);

export default visitorRouter;
