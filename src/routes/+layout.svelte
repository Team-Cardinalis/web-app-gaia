<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import NavItem from '$lib/NavItem.svelte';
	import { commonHome, commonEquipments, commonSettings, setLocale, currentLocale } from '$lib/translations/index';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();

	onMount(async () => {
		if (browser) {
			const storedLang = localStorage.getItem('language') || 'en';
			await setLocale(storedLang as 'en' | 'fr');
		}
	});
</script>

<div class="flex h-screen">
	<aside
		class="fixed bottom-4 left-4 right-4 h-16 rounded-lg bg-white text-black shadow-lg border border-gray-300 flex flex-col md:static md:h-auto md:w-20 md:m-4"
	>
		<nav class="flex-1">
			<ul class="flex h-full w-full flex-row items-center gap-x-2 px-2 md:flex-col md:justify-start md:gap-y-2 md:gap-x-0 md:px-0">
				<NavItem href="/" imgSrc="/favicon.svg" alt={$commonHome} active={$page.url.pathname === '/' } />
				<NavItem href="/equipments" imgSrc="/equipment.svg" alt={$commonEquipments} active={$page.url.pathname === '/equipments' } />
				<NavItem href="/settings" imgSrc="/settings.svg" alt={$commonSettings} active={$page.url.pathname === '/settings' } />
			</ul>
		</nav>
	</aside>
	<main class="flex-1 overflow-y-auto p-4 pb-24 md:pb-4">
		{@render children()}
	</main>
</div>
