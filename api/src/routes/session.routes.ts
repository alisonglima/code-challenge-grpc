import { Router } from "express";

import SessionController from "../controllers/SessionController";

const session = Router();

session.post("/", SessionController.store);

export default session;
