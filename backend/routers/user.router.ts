import express from "express";
import { userController } from "../controllers/user.controller";
import { UserMiddleware } from "../middleware/usermiddleware";
import { jwtRefreshTokenValidate } from "../middleware/authtoken";

export const userRouter = express.Router();

userRouter.post("/Register", UserMiddleware, userController.register);
userRouter.post("/Login", userController.login);
userRouter.post("/Logout", userController.logout);
userRouter.post("/Refresh", jwtRefreshTokenValidate, userController.refresh);
