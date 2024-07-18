"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = void 0;
const save_data_service_1 = __importDefault(require("../services/save.data.service"));
const saveData = (io) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, save_data_service_1.default)(req.body, io);
        res.status(200).send('Data saved successfully');
    }
    catch (error) {
        res.status(500).send('Error saving data');
    }
});
exports.saveData = saveData;
