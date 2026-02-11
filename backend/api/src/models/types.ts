export type DeviceIssue = {
  id: string;
  name: string;
  issues: string[];
};

export type RemediationJob = {
  jobId: string;
  status: "pending" | "running" | "completed" | "failed";
  devices: Array<{ id: string; status: "queued" | "running" | "success" | "failed" }>;
};
