import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "HF Device Remediation Tool",
  tagline: "Automated device issue remediation",
  favicon: "img/favicon.ico",

  url: "https://example.com",
  baseUrl: "/",

  organizationName: "hf",
  projectName: "hf-device-remediation-tool",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts"
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: "HF Device Remediation Tool",
      items: [
        { to: "/dashboard", label: "Dashboard", position: "left" }
      ]
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} HF`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  }
};

export default config;
