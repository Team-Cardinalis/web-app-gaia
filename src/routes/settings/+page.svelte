<script lang="ts">
  import { settingsTitle, settingsLanguage, commonSignOut, commonConnectedWithGoogle, commonUser, setLocale, currentLocale } from '$lib/translations/index';
  import { user, signOutUser } from '$lib/auth';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { LogOut, User } from 'lucide-svelte';
  
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

  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  }
</script>

<h1 class="text-3xl font-semibold mb-6 mt-6">{$settingsTitle}</h1>

<!-- User Account Section -->
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
  <div class="flex items-center space-x-4">
    {#if $user?.photoURL}
      <img 
        src={$user.photoURL} 
        alt="Profile" 
        class="w-16 h-16 rounded-full border-2 border-gray-300"
      />
    {:else}
      <div class="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-medium">
        <User class="w-8 h-8" />
      </div>
    {/if}
    <div class="flex-1">
      <h2 class="text-xl font-semibold text-gray-900">
        {$user?.displayName || $commonUser}
      </h2>
      <p class="text-gray-600">{$user?.email}</p>
      <p class="text-sm text-gray-500">
        {$commonConnectedWithGoogle}
      </p>
    </div>
  </div>
  
  <!-- Logout button -->
  <div class="mt-4">
    <button
      on:click={handleSignOut}
      class="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
    >
      <LogOut class="w-4 h-4 mr-2" />
      {$commonSignOut}
    </button>
  </div>
</div>

<!-- Language Settings -->
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
  <h3 class="text-lg font-medium text-gray-900 mb-4">Préférences</h3>
  
  <div class="space-y-4">
    <div>
      <label for="language" class="block text-sm font-medium text-gray-700">{$settingsLanguage}</label>
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
  </div>
</div> 