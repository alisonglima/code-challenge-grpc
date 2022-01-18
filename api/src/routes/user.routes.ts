import { Router } from "express";

import UserController from "../controllers/UserController";

const user = Router();

user.get("/:id", UserController.show);
user.post("/", UserController.store);

export default user;
