import { Iusers, UserSchemaValidation } from "../models/users.model";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { userService } from "../services/user.service";
import { jwtGenerate, jwtRefreshTokenGenerate } from "../helper/tokenUtils";

class UserController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password, email, role }: Iusers = req.body;
      const { error } = UserSchemaValidation.validate({
        username,
        password,
        email,
        role,
      });
      if (error) {
        res.status(400).send(error);
        return;
      }
      const userRes = await userService.createUser({
        username,
        password: await bcrypt.hash(password, 10),
        email,
        role,
      });
      res.status(201).json({ username: username, email: email });
      return;
    } catch (error) {
      res.status(500).send(error)
    }
  };
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const user = await userService.getCredential(username, password);
      if (user) {
        let access_token = jwtGenerate(username);

        let refresh_token = jwtRefreshTokenGenerate(user);
        res.status(200).json({
          username: user.username,
          access_token: access_token,
          refresh_token: refresh_token,
        });
      } else {
        res.status(404).send("No credential");
      }
    } catch (error) {
      console.log(error);
    }
  };
  logout = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({});
  };
  refresh = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    console.log(username);
    const access_token = jwtGenerate(username);

    res.status(200).json({
      access_token,
    });
  };
}

export const userController = new UserController();
