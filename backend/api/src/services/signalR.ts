export type JobEvent = {
  jobId: string;
  type: "job.started" | "device.remediating" | "device.success" | "device.failed" | "job.completed";
  deviceId?: string;
  message?: string;
};

export async function publishJobEvent(_event: JobEvent) {
  // TODO: integrate Azure SignalR Service
}
