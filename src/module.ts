import {
  defineNuxtModule,
  isNuxt2,
  isNuxt3,
  getNuxtVersion,
  addPlugin,
  addTemplate,
  createResolver,
  addImports,
} from "@nuxt/kit";
import { name, version } from "../package.json";
import { generateConfigContents } from "./gen";
import { formatLogMessage } from "./utils";
import { validateModuleOptions } from "./validators";

export interface ModuleOptions {
  locales: string[];
  defaultLocale: string | null;
  plugins: string[];
  defaultTimeZone: string | null;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "dayjs",
  },
  defaults: {
    locales: [],
    defaultLocale: null,
    plugins: [],
    defaultTimeZone: null,
  },
  setup(options, nuxt) {
    if (!isNuxt2() && !isNuxt3()) {
      throw new Error(
        formatLogMessage(
          `Day.js module doesn't support Nuxt v${getNuxtVersion(nuxt)}`
        )
      );
    }

    const isValid = validateModuleOptions(options);

    if (!isValid) {
      throw new Error(formatLogMessage("You must set valid module options"));
    }

    nuxt.options.build.transpile.push("@nuxtjs/dayjs");

    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");

    addPlugin({
      src: resolve(runtimeDir, `plugin`),
    });

    addTemplate({
      filename: "dayjs.config.mjs",
      getContents: () => generateConfigContents(options),
    });

    addImports({
      name: "useDayjs",
      as: "useDayjs",
      from: resolve(runtimeDir, "composables"),
    });

    // Add dayjs plugin types
    nuxt.hook("prepare:types", ({ references }) => {
      const plugins = options.plugins.map((p) => ({
        types: `dayjs/plugin/${p}`,
      }));
      references.push(...plugins);
    });
  },
});
