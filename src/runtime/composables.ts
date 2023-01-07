import { useNuxtApp } from "#app";
import dayjs from "dayjs";
import "#build/dayjs.config.mjs";

export function useDayjs(): typeof dayjs {
  const { $dayjs } = useNuxtApp();
  return $dayjs;
}
