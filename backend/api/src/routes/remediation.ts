import { Router } from "express";

export const remediationRouter = Router();

remediationRouter.post("/", async (req, res) => {
  const { groupId, scriptId, deviceIds } = req.body || {};

  if (!groupId || !scriptId) {
    res.status(400).json({ error: "groupId and scriptId are required" });
    return;
  }

  res.json({
    jobId: "job_placeholder",
    groupId,
    scriptId,
    deviceIds: deviceIds ?? [],
    note: "TODO: trigger NinjaRMM script and stream updates"
  });
});
