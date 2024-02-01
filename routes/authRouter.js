import express from "express";

import { register, login, logout, getCurrent } from '../controllers/authControllers.js'
import isTokenValid from "../middlewares/isTokenValid.js";


const authRouter = express.Router();

authRouter.post("/users/register", register);

authRouter.post("/users/login", login);

authRouter.post("/users/logout", isTokenValid, logout);

authRouter.get("/users/current", isTokenValid, getCurrent);

export default authRouter;