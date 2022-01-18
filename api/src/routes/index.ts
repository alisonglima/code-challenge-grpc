import { Router } from "express";

import session from "./session.routes";
import user from "./user.routes";

const routes = Router();

routes.use("/users", user);
routes.use("/sessions", session);

export default routes;
