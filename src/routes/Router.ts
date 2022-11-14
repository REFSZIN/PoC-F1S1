import { Router } from "express";
import * as memeController from "../controllers/memeController";
import * as userController from "../controllers/userController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import  { userAuthController }  from "../middlewares/userAuthController";
import { memeSchema, AuthSchema, createUserSchema } from "../schemas/Schemas";

const MyRouter = Router();

MyRouter.post("/login", validateSchemaMiddleware(AuthSchema), userController.login );
MyRouter.post("/createuser", validateSchemaMiddleware(createUserSchema), userController.createuser);
MyRouter.post("/creatememe", userAuthController, validateSchemaMiddleware(memeSchema), memeController.create );
MyRouter.patch("/memes/:idmeme", userAuthController, validateSchemaMiddleware(memeSchema), memeController.update );
MyRouter.get("/user/:iduser", userAuthController, userController.getuser);
MyRouter.get("/memes", userAuthController, memeController.get );
MyRouter.delete("/delete/:idmeme", userAuthController, memeController.delet );

export default MyRouter;
