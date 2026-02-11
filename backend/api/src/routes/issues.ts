import { Router } from "express";

export const issuesRouter = Router();

issuesRouter.get("/:id/issues", async (req, res) => {
  const { id } = req.params;
  res.json({ groupId: id, devices: [], note: "TODO: filter by issues" });
});
