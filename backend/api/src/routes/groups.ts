import { Router } from "express";

export const groupsRouter = Router();

groupsRouter.get("/", async (_req, res) => {
  res.json({ groups: [], note: "TODO: pull from NinjaRMM" });
});
