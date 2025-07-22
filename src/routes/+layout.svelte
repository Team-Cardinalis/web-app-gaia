<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="flex flex-col md:flex-row h-screen">
	<aside
		class="bg-white text-black transition-all duration-300 flex-shrink-0 md:m-4 rounded-none md:rounded-lg shadow-lg border-t md:border border-gray-300 flex flex-col order-last md:order-first md:w-20"
	>
		<nav class="flex-1">
			<ul class="flex flex-row md:flex-col justify-around md:justify-start w-full h-full gap-y-2">

				<li
					class="flex w-16 justify-center rounded-md hover:bg-[#f4f4f4] md:mx-2 md:mt-2 transition-all duration-300 { $page.url.pathname === '/' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/"
						class="flex items-center h-14 w-14 justify-center"
					>
						<img src="/favicon.svg" alt="Home" class="w-6 h-6 flex-shrink-0" />
						<span
							class="whitespace-nowrap overflow-hidden w-0 opacity-0"
							>Home</span
						>
					</a>
				</li>
				<li
					class="flex w-16 justify-center rounded-md hover:bg-[#f4f4f4] md:mx-2 transition-all duration-300 { $page.url.pathname === '/equipment' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/equipment"
						class="flex items-center h-14 w-14 justify-center"
					>
						<img src="/equipment.svg" alt="Équipement" class="w-6 h-6 flex-shrink-0" />
						<span
							class="whitespace-nowrap overflow-hidden w-0 opacity-0"
							>Equipment</span
						>
					</a>
				</li>
				<li
					class="flex w-16 justify-center rounded-md hover:bg-[#f4f4f4] md:mx-2 transition-all duration-300 { $page.url.pathname === '/settings' ? 'bg-[#f4f4f4]' : '' } md:mt-auto md:mb-2"
				>
					<a
						href="/settings"
						class="flex items-center h-14 w-14 justify-center"
					>
						<img src="/settings.svg" alt="Settings" class="w-6 h-6 flex-shrink-0" />
						<span
							class="whitespace-nowrap overflow-hidden w-0 opacity-0"
							>Settings</span
						>
					</a>
				</li>
			</ul>
		</nav>
	</aside>
	<main class="flex-1 overflow-y-auto p-4 order-first md:order-last">
		{@render children()}
	</main>
</div>
