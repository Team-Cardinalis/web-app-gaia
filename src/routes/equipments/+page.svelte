<script lang="ts">
	import DroneCard from '$lib/DroneCard.svelte';
	import { t } from '$lib/translations';
	import { get } from 'svelte/store';
	const translate = get(t);
	let drones = [
		{ name: 'Drone 1', battery: 75, status: 'Actif', altitude: 100, speed: 15 },
		{ name: 'Drone 2', battery: 60, status: 'En vol', altitude: 150, speed: 20 },
		{ name: 'Drone 3', battery: 90, status: 'Au sol', altitude: 0, speed: 0 }
	];
</script>

<div class="container mx-auto">
	<h1 class="text-3xl font-semibold mb-6 mt-6">{translate('equipments.title')}</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each drones as drone}
			<DroneCard {...drone} />
		{/each}
	</div>
</div> 