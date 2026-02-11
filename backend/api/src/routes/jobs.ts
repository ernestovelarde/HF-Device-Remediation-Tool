import { Router } from "express";

export const jobsRouter = Router();

jobsRouter.get("/:jobId", async (req, res) => {
  const { jobId } = req.params;
  res.json({ jobId, status: "pending", devices: [], note: "TODO: job status" });
});
