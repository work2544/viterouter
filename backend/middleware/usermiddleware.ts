import { NextFunction, Request, Response, RequestHandler } from "express";
import { userModel } from "../models/users.model";

export const UserMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, email } = req.body;
    const user = await userModel.findUser(username, email);

    if (user) {
      res.status(409).send("username or email already taken");
      return;
    }
    next();
  } catch (error) {
    res.status(500).send(error);
    return;
  }
};
