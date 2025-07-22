<script>
	let stats = {
		users: 150,
		sales: 3200,
		revenue: '12,500 €',
		visits: 4500
	};
</script>

<div class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-6">Dashboard</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		<div class="bg-white p-4 rounded shadow">
			<h2 class="text-xl font-semibold">Users</h2>
			<p class="text-2xl">{stats.users}</p>
		</div>
		<div class="bg-white p-4 rounded shadow">
			<h2 class="text-xl font-semibold">Sales</h2>
			<p class="text-2xl">{stats.sales}</p>
		</div>
		<div class="bg-white p-4 rounded shadow">
			<h2 class="text-xl font-semibold">Revenue</h2>
			<p class="text-2xl">{stats.revenue}</p>
		</div>
		<div class="bg-white p-4 rounded shadow">
			<h2 class="text-xl font-semibold">Visits</h2>
			<p class="text-2xl">{stats.visits}</p>
		</div>
	</div>
</div>
