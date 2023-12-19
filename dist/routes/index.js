"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
let indexRouter = (0, express_1.Router)();
exports.indexRouter = indexRouter;
indexRouter.get('*', (req, res) => {
    res.send({ reply: 'pong' });
});
