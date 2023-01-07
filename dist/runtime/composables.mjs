import { useNuxtApp } from "#app";
import "#build/dayjs.config.mjs";
export function useDayjs() {
  const { $dayjs } = useNuxtApp();
  return $dayjs;
}
