<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="flex h-screen">
	<aside
		class="fixed bottom-4 left-4 right-4 h-16 rounded-lg bg-white text-black shadow-lg border border-gray-300 flex flex-col md:static md:h-auto md:w-20 md:m-4"
	>
		<nav class="flex-1">
			<ul class="flex h-full w-full flex-row items-center gap-x-2 px-4 md:flex-col md:justify-start md:gap-y-2 md:gap-x-0 md:px-0" style="padding-right: 2px; padding-left: 2px;">

				<li
					class="flex flex-1 justify-center rounded-md hover:bg-[#f4f4f4] transition-all duration-300 md:w-16 md:flex-none md:mx-2 md:mt-2 { $page.url.pathname === '/' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/"
						class="flex items-center h-14 w-14 justify-center"
					>
						<img src="/favicon.svg" alt="Home" class="w-6 h-6 flex-shrink-0" />
					</a>
				</li>
				<li
					class="flex flex-1 justify-center rounded-md hover:bg-[#f4f4f4] transition-all duration-300 md:w-16 md:flex-none md:mx-2 { $page.url.pathname === '/equipment' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/equipment"
						class="flex items-center h-14 w-14 justify-center"
					>
						<img src="/equipment.svg" alt="Équipement" class="w-6 h-6 flex-shrink-0" />
					</a>
				</li>
				<li
					class="flex flex-1 justify-center rounded-md hover:bg-[#f4f4f4] transition-all duration-300 md:w-16 md:flex-none md:mx-2 md:mt-auto md:mb-2 { $page.url.pathname === '/settings' ? 'bg-[#f4f4f4]' : '' }"
				>
					<a
						href="/settings"
						class="flex items-center h-14 w-14 justify-center"
					>
						<img src="/settings.svg" alt="Settings" class="w-6 h-6 flex-shrink-0" />
					</a>
				</li>
			</ul>
		</nav>
	</aside>
	<main class="flex-1 overflow-y-auto p-4 pb-24 md:pb-4">
		{@render children()}
	</main>
</div>
