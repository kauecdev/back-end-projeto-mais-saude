"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PacientesController_1 = __importDefault(require("./controllers/PacientesController"));
const routes = express_1.Router();
routes.get('/', PacientesController_1.default.index);
routes.post('/cadastro-paciente', PacientesController_1.default.create);
exports.default = routes;
