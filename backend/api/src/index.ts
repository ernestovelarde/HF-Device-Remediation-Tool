import express from "express";
import cors from "cors";
import morgan from "morgan";

import { groupsRouter } from "./routes/groups.js";
import { issuesRouter } from "./routes/issues.js";
import { remediationRouter } from "./routes/remediation.js";
import { jobsRouter } from "./routes/jobs.js";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/groups", groupsRouter);
app.use("/groups", issuesRouter);
app.use("/remediate", remediationRouter);
app.use("/jobs", jobsRouter);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
