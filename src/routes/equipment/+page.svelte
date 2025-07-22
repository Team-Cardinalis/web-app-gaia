<script>
	let drones = [
		{ id: 1, name: 'Drone 1', battery: 75, status: 'Active', altitude: 120, speed: 15 },
		{ id: 2, name: 'Drone 2', battery: 45, status: 'Idle', altitude: 0, speed: 0 },
		{ id: 3, name: 'Drone 3', battery: 90, status: 'Charging', altitude: 0, speed: 0 }
	];
</script>

<div class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-6">Equipment Dashboard</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each drones as drone}
			<div class="bg-white p-4 rounded shadow">
				<h2 class="text-xl font-semibold">{drone.name}</h2>
				<p>Battery: {drone.battery}%</p>
				<p>Status: {drone.status}</p>
				<p>Altitude: {drone.altitude} m</p>
				<p>Speed: {drone.speed} km/h</p>
			</div>
		{/each}
	</div>
</div> 