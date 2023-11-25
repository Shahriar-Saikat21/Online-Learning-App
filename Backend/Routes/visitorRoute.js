import express from 'express';

import { displayNews,seePopularCourse } from '../Controller/visitorHomeController.js';

const visitorRouter = express.Router();

visitorRouter.get('/displayNews', displayNews);

visitorRouter.get('/seePopularCourse',seePopularCourse);

export default visitorRouter;
