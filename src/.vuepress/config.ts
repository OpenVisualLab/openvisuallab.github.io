import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "OpenVisualLab",
  description: "(Trustworthy & Embodied AI)",

  theme,

  alias: {
    "@MyTeam": path.resolve(__dirname, "components/TeamSection.vue"),
    "@MyComponent": path.resolve(__dirname, "components/HelloWorld.vue"),
    "@MyCollaborator": path.resolve(__dirname, "components/TeamMember.vue"),
    "@MyBookmark": path.resolve(__dirname, "components/Bookmark.vue"),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
