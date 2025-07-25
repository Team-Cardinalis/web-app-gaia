<script lang="ts">
  import { t, setLocale, currentLocale } from '$lib/translations/index';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  let selectedLanguage = 'en';

  onMount(() => {
    if (browser) {
      selectedLanguage = localStorage.getItem('language') || 'en';
    }
  });

  async function changeLanguage(lang: string) {
    selectedLanguage = lang;
    await setLocale(lang as 'en' | 'fr');
  }
</script>

<h1 class="text-3xl font-semibold mb-6 mt-6">{t('settings.title')}</h1>
<p>Page en construction</p>

<div class="mt-4">
  <label for="language" class="block text-sm font-medium text-gray-700">{t('settings.language')}</label>
  <select
    id="language"
    bind:value={selectedLanguage}
    on:change={(e) => changeLanguage((e.target as HTMLSelectElement).value)}
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  >
    <option value="en">English</option>
    <option value="fr">Français</option>
  </select>
</div> 