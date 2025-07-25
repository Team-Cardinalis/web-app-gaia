import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

export const config = {
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    en: { lang },
    fr: { lang },
  },
  loaders: [
    // English loaders
    { locale: 'en', key: 'common', loader: async () => (await import('./en/common.json')).default },
    { locale: 'en', key: 'dashboard', routes: ['/'], loader: async () => (await import('./en/dashboard.json')).default },
    { locale: 'en', key: 'equipments', routes: ['/equipments'], loader: async () => (await import('./en/equipments.json')).default },
    { locale: 'en', key: 'settings', routes: ['/settings'], loader: async () => (await import('./en/settings.json')).default },
    // French loaders
    { locale: 'fr', key: 'common', loader: async () => (await import('./fr/common.json')).default },
    { locale: 'fr', key: 'dashboard', routes: ['/'], loader: async () => (await import('./fr/dashboard.json')).default },
    { locale: 'fr', key: 'equipments', routes: ['/equipments'], loader: async () => (await import('./fr/equipments.json')).default },
    { locale: 'fr', key: 'settings', routes: ['/settings'], loader: async () => (await import('./fr/settings.json')).default },
  ],
};

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...')); 