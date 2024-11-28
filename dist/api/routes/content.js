"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const content_1 = require("../controllers/content");
const contentRouter = (0, express_1.Router)();
contentRouter.post('/addContent', auth_1.auth, content_1.addContent);
contentRouter.get('/getTags', auth_1.auth, content_1.getAllTags);
contentRouter.get('/viewContent', auth_1.auth, content_1.viewContent);
contentRouter.put('/updateContent', auth_1.auth, content_1.editContent);
contentRouter.delete('/deleteContent', auth_1.auth, content_1.deleteContent);
exports.default = contentRouter;
