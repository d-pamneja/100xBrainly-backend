"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../middlewares/user");
const auth_1 = require("../middlewares/auth");
const user_2 = require("../controllers/user");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/signup', user_1.checkCredentials, user_2.signUp);
exports.userRouter.post('/login', user_2.login);
exports.userRouter.use(auth_1.auth);
exports.userRouter.get('/logout', user_2.logout);
exports.userRouter.get('/auth-status', user_2.verifyUser);
exports.default = exports.userRouter;
