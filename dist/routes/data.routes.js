"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const save_data_controller_1 = require("../controllers/save.data.controller");
const middleware_1 = require("../middleware/middleware");
const router = express_1.default.Router();
exports.default = (io) => {
    router.post('/data', middleware_1.verifyToken, (0, save_data_controller_1.saveData)(io));
    return router;
};
