import { defineNuxtPlugin } from "#app";
import dayjs from "dayjs";
import "#build/dayjs.config.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("dayjs", dayjs);
});
