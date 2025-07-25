import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Types
export type Locale = 'en' | 'fr';

// Stores
export const currentLocale = writable<Locale>('en');

// Translation data
const translationData = {
  en: {
    common: {
      home: 'Home',
      equipments: 'Equipments',
      settings: 'Settings'
    },
    dashboard: {
      title: 'Dashboard',
      totalUsers: 'Total Users',
      fireDetected: 'Fire Detected',
      humansDetected: 'Humans Detected',
      greeting_day: 'Hello',
      greeting_night: 'Good Night'
    },
    equipments: {
      title: 'Equipments',
      battery: 'Battery',
      status: 'Status',
      altitude: 'Altitude',
      speed: 'Speed'
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      theme: 'Theme'
    }
  },
  fr: {
    common: {
      home: 'Accueil',
      equipments: 'Équipements',
      settings: 'Paramètres'
    },
    dashboard: {
      title: 'Tableau de bord',
      totalUsers: 'Utilisateurs totaux',
      fireDetected: 'Feu détecté',
      humansDetected: 'Humains détectés',
      greeting_day: 'Bonjour',
      greeting_night: 'Bonne Nuit'
    },
    equipments: {
      title: 'Équipements',
      battery: 'Batterie',
      status: 'Statut',
      altitude: 'Altitude',
      speed: 'Vitesse'
    },
    settings: {
      title: 'Paramètres',
      language: 'Langue',
      theme: 'Thème'
    }
  }
};

// Helper function to get nested translation
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

// Create a derived store for current translations
export const currentTranslations = derived(currentLocale, ($locale) => {
  return translationData[$locale];
});

// Individual translation stores
export const commonHome = derived(currentTranslations, ($t) => getNestedValue($t, 'common.home'));
export const commonEquipments = derived(currentTranslations, ($t) => getNestedValue($t, 'common.equipments'));
export const commonSettings = derived(currentTranslations, ($t) => getNestedValue($t, 'common.settings'));

export const dashboardTitle = derived(currentTranslations, ($t) => getNestedValue($t, 'dashboard.title'));
export const dashboardTotalUsers = derived(currentTranslations, ($t) => getNestedValue($t, 'dashboard.totalUsers'));
export const dashboardFireDetected = derived(currentTranslations, ($t) => getNestedValue($t, 'dashboard.fireDetected'));
export const dashboardHumansDetected = derived(currentTranslations, ($t) => getNestedValue($t, 'dashboard.humansDetected'));
export const dashboardGreetingDay = derived(currentTranslations, ($t) => getNestedValue($t, 'dashboard.greeting_day'));
export const dashboardGreetingNight = derived(currentTranslations, ($t) => getNestedValue($t, 'dashboard.greeting_night'));

export const equipmentsTitle = derived(currentTranslations, ($t) => getNestedValue($t, 'equipments.title'));
export const equipmentsBattery = derived(currentTranslations, ($t) => getNestedValue($t, 'equipments.battery'));
export const equipmentsStatus = derived(currentTranslations, ($t) => getNestedValue($t, 'equipments.status'));
export const equipmentsAltitude = derived(currentTranslations, ($t) => getNestedValue($t, 'equipments.altitude'));
export const equipmentsSpeed = derived(currentTranslations, ($t) => getNestedValue($t, 'equipments.speed'));

export const settingsTitle = derived(currentTranslations, ($t) => getNestedValue($t, 'settings.title'));
export const settingsLanguage = derived(currentTranslations, ($t) => getNestedValue($t, 'settings.language'));
export const settingsTheme = derived(currentTranslations, ($t) => getNestedValue($t, 'settings.theme'));

// Set locale function
export async function setLocale(locale: Locale) {
  if (browser) {
    localStorage.setItem('language', locale);
  }
  
  currentLocale.set(locale);
}

// Initialize translations
export function initTranslations() {
  if (browser) {
    const storedLang = localStorage.getItem('language') as Locale || 'en';
    setLocale(storedLang);
  } else {
    setLocale('en');
  }
}

// Initialize on import
initTranslations(); 