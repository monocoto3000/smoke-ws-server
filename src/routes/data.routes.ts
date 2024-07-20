import * as express from 'express';
import { dataController } from '../controllers/data.controller';

const router = express.Router();

router.get('/data', dataController.handleRequest);

export default router;