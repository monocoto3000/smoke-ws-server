import express from 'express';
import { saveData } from '../controllers/save.data.controller';
import { Server } from 'socket.io';
import { verifyToken } from '../middleware/middleware';

const router = express.Router();

export default (io: Server) => {
    router.post('/data', verifyToken, saveData(io));
    return router;
  };

