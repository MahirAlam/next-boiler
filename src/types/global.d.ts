// Use type safe message keys with `next-intl`
// eslint-disable-next-line @typescript-eslint/consistent-type-imports -- it works this way
type Messages = typeof import("../locales/en.json");

// eslint-disable-next-line @typescript-eslint/no-empty-interface -- it works this way
declare interface IntlMessages extends Messages {}
