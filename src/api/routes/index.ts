import { Router } from "express";
import userRouter from "./user";
import contentRouter from "./content";
import shareRouter from "./share";
import thridPartyRouter from "./auth";

const appRouter = Router()

appRouter.get('/', (req, res) => {
    console.log("Trial")
    res.status(200).send("Trial");
});
appRouter.use('/user',userRouter)
appRouter.use('/content',contentRouter)
appRouter.use('/share',shareRouter)
appRouter.use('/auth',thridPartyRouter)

export default appRouter