<script>
	let drones = [
		{ name: 'Drone 1', battery: 75, status: 'Actif', altitude: 100, speed: 15 },
		{ name: 'Drone 2', battery: 60, status: 'En vol', altitude: 150, speed: 20 },
		{ name: 'Drone 3', battery: 90, status: 'Au sol', altitude: 0, speed: 0 }
	];
</script>

<div class="container mx-auto">
	<h1 class="text-3xl font-bold mb-6">Equipment - Drones</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each drones as drone}
			<div class="bg-white p-4 rounded shadow">
				<h2 class="text-xl font-semibold mb-2">{drone.name}</h2>
				<p>Battery: {drone.battery}%</p>
				<p>Status: {drone.status}</p>
				<p>Altitude: {drone.altitude} m</p>
				<p>Speed: {drone.speed} km/h</p>
			</div>
		{/each}
	</div>
</div> 