import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://gean-dev.github.io/contest",
  base: "/contest/",
  integrations: [tailwind(), react()],
});
