<script lang="ts">
  import { get } from 'svelte/store';
  import { t } from '$lib/translations';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  let selectedLanguage = 'en';
  const translate = get(t);

  onMount(() => {
    if (browser) {
      selectedLanguage = localStorage.getItem('language') || 'en';
    }
  });

  function changeLanguage(lang: string) {
    selectedLanguage = lang;
    if (browser) {
      localStorage.setItem('language', lang);
      window.location.reload();
    }
  }
</script>

<h1 class="text-3xl font-semibold mb-6 mt-6">{$t('settings.title')}</h1>
<p>{$t('settings.underConstruction')}</p>

<div class="mt-4">
  <label for="language" class="block text-sm font-medium text-gray-700">{$t('settings.language')}</label>
  <select
    id="language"
    bind:value={selectedLanguage}
    on:change={(e) => changeLanguage((e.target as HTMLSelectElement).value)}
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  >
    <option value="en">{$t('settings.english')}</option>
    <option value="fr">{$t('settings.french')}</option>
  </select>
</div> 