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
					<li
						class="flex flex-1 justify-center rounded-md hover:bg-[#f4f4f4] transition-all duration-300 md:w-16 md:flex-none md:mx-2 {$page.url.pathname === '/settings' ? 'bg-[#f4f4f4]' : ''} md:mt-auto md:mb-2"
					>
						<a
							href="/settings"
							class="flex items-center h-14 w-14 justify-center"
						>
							{#if $user.photoURL}
								<img src={$user.photoURL} alt={$commonSettings} class="w-6 h-6 flex-shrink-0 rounded-full" />
							{:else}
								<div class="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-medium">
									{$user.displayName?.charAt(0) || $user.email?.charAt(0) || 'U'}
								</div>
							{/if}
						</a>
					</li>
				</ul>
			</nav>
			

		</aside>
		<main class="flex-1 overflow-y-auto p-4 pb-24 md:pb-4">
			{@render children()}
		</main>
	</div>
{/if}
