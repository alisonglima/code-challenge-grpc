import { Request, Response } from "express";
import { promisify } from "util";

import HydraService from "../services/hydra";

class UserController {
  show(req: Request, res: Response) {}
  store(req: Request, res: Response) {
    const { email, username, password } = req.body;

    HydraService.registerUser({ user: { email, username, password } }, (err: Error, response: Response) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      return res.json(response);
    });
  }
}

export default new UserController();
