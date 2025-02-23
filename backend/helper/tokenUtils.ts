import jwt from "jsonwebtoken";
import { Iusers } from "../models/users.model";

export const jwtGenerate = (username: Pick<Iusers,"username">) => {
  const accessToken = jwt.sign(
    { id: username },
    String(process.env.ACCESS_TOKEN_SECRET),
    { expiresIn: "30m", algorithm: "HS256" }
  );

  return accessToken;
};

export const jwtRefreshTokenGenerate = (user: Iusers) => {
  const refreshToken = jwt.sign(
    { id: user.username },
    String(process.env.REFRESH_TOKEN_SECRET),
    { expiresIn: "1d", algorithm: "HS256" }
  );

  return refreshToken;
};
