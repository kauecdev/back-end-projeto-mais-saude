"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./database/connection");
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 3333;
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
