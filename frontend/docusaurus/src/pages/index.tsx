import React from "react";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout title="HF Device Remediation Tool" description="Automated device issue remediation">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">HF Device Remediation Tool</h1>
          <p className="hero__subtitle">Monitor issue groups, remediate at scale.</p>
        </div>
      </header>
      <main className="container" style={{ padding: "2rem 0" }}>
        <p>
          Use the Dashboard to review issue groups and trigger remediations across affected devices.
        </p>
      </main>
    </Layout>
  );
}
