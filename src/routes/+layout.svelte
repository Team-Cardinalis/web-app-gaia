<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';
	import { page } from '$app/stores';

	const isSidebarOpen = writable(true);
	let { children } = $props();

	function toggleSidebar() {
		isSidebarOpen.update((open) => !open);
	}
</script>

<div class="flex h-screen">
	<aside
		class="{ $isSidebarOpen ? 'w-64' : 'w-20' } bg-white text-black transition-width duration-300 flex-shrink-0 m-4 rounded-lg shadow-lg border border-gray-300 flex flex-col"
	>
		<nav class="flex-1">
			<ul class="flex flex-col h-full gap-y-2">
				<li class="flex w-16 justify-center rounded-md hover:bg-[#f4f4f4] mx-2 mt-2 transition-all duration-300">
					<button
						on:click={toggleSidebar}
						class="w-14 h-14 flex items-center justify-center"
					>
						<img src="/favicon.svg" alt="Menu" class="w-7 h-7" />
					</button>
				</li>
				<li
					class="flex rounded-md hover:bg-[#f4f4f4] mx-2 transition-all duration-300 { $page.url.pathname === '/' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/"
						class="flex items-center h-14 { $isSidebarOpen ? 'w-full px-4' : 'w-14 justify-center' }"
					>
						<img src="/home.svg" alt="Home" class="w-7 h-7 flex-shrink-0" />
						<span
							class="whitespace-nowrap overflow-hidden transition-all duration-200 { $isSidebarOpen ? 'ml-4' : 'w-0 opacity-0' }"
							>Home</span
						>
					</a>
				</li>
				<li
					class="flex rounded-md hover:bg-[#f4f4f4] mx-2 transition-all duration-300 { $page.url.pathname === '/equipment' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/equipment"
						class="flex items-center h-14 { $isSidebarOpen ? 'w-full px-4' : 'w-14 justify-center' }"
					>
						<img src="/equipment.svg" alt="Équipement" class="w-7 h-7 flex-shrink-0" />
						<span
							class="whitespace-nowrap overflow-hidden transition-all duration-200 { $isSidebarOpen ? 'ml-4' : 'w-0 opacity-0' }"
							>Equipment</span
						>
					</a>
				</li>
				<li
					class="flex rounded-md hover:bg-[#f4f4f4] mx-2 transition-all duration-300 { $page.url.pathname === '/settings' ? 'bg-[#f4f4f4]' : '' } mt-auto mb-2"
				>
					<a
						href="/settings"
						class="flex items-center h-14 { $isSidebarOpen ? 'w-full px-4' : 'w-14 justify-center' }"
					>
						<img src="/settings.svg" alt="Settings" class="w-7 h-7 flex-shrink-0" />
						<span
							class="whitespace-nowrap overflow-hidden transition-all duration-200 { $isSidebarOpen ? 'ml-4' : 'w-0 opacity-0' }"
							>Settings</span
						>
					</a>
				</li>
			</ul>
		</nav>
	</aside>
	<main class="flex-1 overflow-y-auto p-4">
		{@render children()}
	</main>
</div>
