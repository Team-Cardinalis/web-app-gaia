<script>
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	let { children } = $props();
	let isRetracted = writable(true);

	function toggleSidebar() {
		isRetracted.update((val) => !val);
	}

	function navigateTo(path) {
		goto(path);
	}
</script>

<div class="flex h-screen">
	<aside class="{$isRetracted ? 'w-16' : 'w-64'} bg-gray-800 text-white transition-width duration-300 flex flex-col items-center py-4">
		<button on:click={toggleSidebar} class="mb-4 p-2">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
		<button on:click={() => navigateTo('/')} class="flex items-center p-2 hover:bg-gray-700 w-full justify-center {$isRetracted ? '' : 'justify-start px-4'}">
			<img src="/favicon.svg" alt="App Icon" class="w-6 h-6" />
			{#if !$isRetracted}
				<span class="ml-2">Dashboard</span>
			{/if}
		</button>
		<button on:click={() => navigateTo('/equipment')} class="flex items-center p-2 hover:bg-gray-700 w-full justify-center {$isRetracted ? '' : 'justify-start px-4'}">
			<img src="/equipment.svg" alt="Equipment" class="w-6 h-6" />
			{#if !$isRetracted}
				<span class="ml-2">Equipment</span>
			{/if}
		</button>
		<button on:click={() => navigateTo('/settings')} class="flex items-center p-2 hover:bg-gray-700 w-full justify-center {$isRetracted ? '' : 'justify-start px-4'}">
			<img src="/settings.svg" alt="Settings" class="w-6 h-6" />
			{#if !$isRetracted}
				<span class="ml-2">Settings</span>
			{/if}
		</button>
	</aside>
	<main class="flex-1 p-4 overflow-auto">
		{@render children()}
	</main>
</div>
