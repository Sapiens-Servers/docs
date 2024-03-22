import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sapiens Server Docs",
  description:
    "Community created documentation for running dedicated servers for Sapiens.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: "Quickstart",
        link: "/quickstart",
      },
      {
        text: "Common issues",
        link: "/common-issues",
      },
      {
        text: "Guides",
        items: [
          { text: "Getting Started w/ SteamCMD", link: "/guides/steamcmd" },
          {
            text: "Getting started w/ Pterodactyl",
            link: "/guides/pterodactyl",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/docs",
});
