import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const tokenAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const access_token = req.header("Authorization")?.replace("Bearer ", "");
    if (!access_token) {
      return res.sendStatus(401);
    }

    const decoded = jwt.verify(
      access_token,
      String(process.env.ACCESS_TOKEN_SECRET)
    );
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};

export const jwtRefreshTokenValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refresh_token = req.header("Authorization")?.replace("Bearer ", "");

    if (!refresh_token) {
      return;
    }

    const decoded = jwt.verify(
      refresh_token,
      String(process.env.REFRESH_TOKEN_SECRET)
    );
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
