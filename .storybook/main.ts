/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import path from "path";
import { mergeConfig } from "vite";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      builder: {},
    },
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "../src/core/assets/styles/_global.scss";',
          },
        },
      },
    });
  },
};
export default config;
