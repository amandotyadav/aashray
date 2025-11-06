import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import userAuth from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", userAuth, logout);
authRouter.get("/is-auth", userAuth, isAuthenticated);

export default authRouter;
