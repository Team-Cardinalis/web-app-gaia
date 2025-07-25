import { locales, loadTranslations, translations, defaultLocale } from '$lib/translations';

export const load = async ({ url, cookies, request }) => {
  const { pathname } = url;
  let locale = cookies.get('lang') || defaultLocale;
  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }
  await loadTranslations(locale, pathname);
  return {
    i18n: { locale, route: pathname },
    translations: translations.get(),
  };
}; 