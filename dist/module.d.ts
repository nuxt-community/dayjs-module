import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    locales: string[];
    defaultLocale: string | null;
    plugins: string[];
    defaultTimeZone: string | null;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { ModuleOptions, _default as default };
