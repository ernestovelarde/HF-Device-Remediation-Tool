export type NinjaAuthConfig = {
  clientId: string;
  clientSecret: string;
  baseUrl: string;
  tenant: string;
};

export function createNinjaClient(_config: NinjaAuthConfig) {
  return {
    async listGroups() {
      return [] as Array<{ id: string; name: string }>;
    },
    async listDevicesWithIssues(_groupId: string) {
      return [] as Array<{ id: string; name: string; issues: string[] }>;
    },
    async runScript(_deviceId: string, _scriptId: string) {
      return { status: "queued" as const };
    }
  };
}
