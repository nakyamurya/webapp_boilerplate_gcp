"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.get('/', (_req, res) => {
    res.send(`<h1>this is express + ts boiler plate</h1>`);
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
