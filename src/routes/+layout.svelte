<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import NavItem from '$lib/NavItem.svelte';
	import LoginScreen from '$lib/LoginScreen.svelte';
	import { commonHome, commonEquipments, commonSettings, commonLoading, commonSignOut, setLocale, currentLocale } from '$lib/translations/index';
	import { user, loading, signOutUser } from '$lib/auth';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { LogOut } from 'lucide-svelte';

	let { children } = $props();

	onMount(async () => {
		if (browser) {
			const storedLang = localStorage.getItem('language') || 'en';
			await setLocale(storedLang as 'en' | 'fr');
		}
	});

	async function handleSignOut() {
		try {
			await signOutUser();
		} catch (error) {
			console.error('Sign out failed:', error);
		}
	}
</script>

{#if $loading}
	<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
		<div class="text-center">
			<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
			<p class="text-gray-600">{$commonLoading}</p>
		</div>
	</div>
{:else if !$user}
	<LoginScreen />
{:else}
	<div class="flex h-screen">
		<aside
			class="fixed bottom-4 left-4 right-4 h-16 rounded-lg bg-white text-black shadow-lg border border-gray-300 flex flex-col md:static md:h-auto md:w-20 md:m-4"
		>
			<nav class="flex-1">
				<ul class="flex h-full w-full flex-row items-center gap-x-2 px-2 md:flex-col md:justify-start md:gap-y-2 md:gap-x-0 md:px-0">
					<NavItem href="/" imgSrc="/icon-black.svg" alt={$commonHome} active={$page.url.pathname === '/' } />
					<NavItem href="/equipments" imgSrc="/equipment.svg" alt={$commonEquipments} active={$page.url.pathname === '/equipments' } />
					<NavItem href="/settings" imgSrc="/settings.svg" alt={$commonSettings} active={$page.url.pathname === '/settings' } />
				</ul>
			</nav>
			
			<!-- User profile (plus de bouton de déconnexion ici) -->
			<div class="hidden md:flex md:flex-col md:items-center md:gap-y-2 md:pb-4">
				{#if $user.photoURL}
					<img 
						src={$user.photoURL} 
						alt="Profile" 
						class="w-8 h-8 rounded-full border-2 border-gray-300"
					/>
				{:else}
					<div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">
						{$user.displayName?.charAt(0) || $user.email?.charAt(0) || 'U'}
					</div>
				{/if}
			</div>
		</aside>
		<main class="flex-1 overflow-y-auto p-4 pb-24 md:pb-4">
			{@render children()}
		</main>
	</div>
{/if}
