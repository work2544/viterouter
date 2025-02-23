import express from "express";
import cors from "cors";
import { userRouter } from "./routers/user.router";

import dotenv from "dotenv";
dotenv.config();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.listen(7070, () => {
  console.log("app is listening 7070");
});
