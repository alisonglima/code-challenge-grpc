import { Request, Response } from "express";
// import { promisify } from "util";

import HydraService from "../services/hydra";

class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    HydraService.loginUser({ user: { email, password } }, (err: Error, response: Response) => {
      if (err) {
        return res.status(401).json({ error: err.message });
      }

      return res.json(response);
    });
  }
}

export default new SessionController();
