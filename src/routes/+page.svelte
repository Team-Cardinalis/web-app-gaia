<script>
  import { Users, BarChart2, ShoppingCart, Briefcase } from 'lucide-svelte';
</script>

<h1 class="text-3xl font-bold mb-6">Dashboard</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Card 1 -->
  <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div class="bg-blue-500 text-white p-3 rounded-full mr-4">
      <Users size={24} />
    </div>
    <div>
      <p class="text-gray-500">Total Users</p>
      <p class="text-2xl font-bold">1,234</p>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div class="bg-green-500 text-white p-3 rounded-full mr-4">
      <BarChart2 size={24} />
    </div>
    <div>
      <p class="text-gray-500">Sales</p>
      <p class="text-2xl font-bold">$56,789</p>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div class="bg-yellow-500 text-white p-3 rounded-full mr-4">
      <ShoppingCart size={24} />
    </div>
    <div>
      <p class="text-gray-500">New Orders</p>
      <p class="text-2xl font-bold">42</p>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div class="bg-purple-500 text-white p-3 rounded-full mr-4">
      <Briefcase size={24} />
    </div>
    <div>
      <p class="text-gray-500">Active Projects</p>
      <p class="text-2xl font-bold">12</p>
    </div>
  </div>
</div>
