import express from 'express';

import { displayNews } from '../Controller/visitorHomeController.js';

const visitorRouter = express.Router();

visitorRouter.get('/displayNews', displayNews);

export default visitorRouter;
