"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const sharing_1 = require("../controllers/sharing");
exports.shareRouter = (0, express_1.Router)();
exports.shareRouter.get('/linkStatus', auth_1.auth, sharing_1.linkStatus);
exports.shareRouter.post('/shareBrain', auth_1.auth, sharing_1.shareLink);
exports.shareRouter.get('/viewBrain/:username/:uid', sharing_1.viewLink);
exports.default = exports.shareRouter;
