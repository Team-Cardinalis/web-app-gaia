<script lang="ts">
  import { user, loading } from './auth';
  import LoginScreen from './LoginScreen.svelte';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let { children } = $props();

  onMount(() => {
    if (browser && !$loading && !$user) {
      // Redirect to login if not authenticated
      goto('/');
    }
  });
</script>

{#if $loading}
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
      <p class="text-gray-600">Vérification de l'authentification...</p>
    </div>
  </div>
{:else if !$user}
  <LoginScreen />
{:else}
  {@render children()}
{/if} 