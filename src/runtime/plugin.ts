import { defineNuxtPlugin } from "#app";
import dayjs from "dayjs";
import "#build/dayjs.config.mjs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("dayjs", dayjs);
});

interface PluginInjection {
  $dayjs: typeof dayjs;
}

// Nuxt Bridge & Nuxt 3
declare module "#app" {
  interface NuxtApp extends PluginInjection {}
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties extends PluginInjection {}
}

// @ts-ignore
declare module "vue/types/vue" {
  interface Vue extends PluginInjection {}
}
