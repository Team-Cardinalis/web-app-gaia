<script lang="ts">
	import '../app.css';
</script>

<nav class="p-4 bg-gray-800 flex gap-4">
  <a href="/" class="hover:underline">Home</a>
  <a href="/about" class="hover:underline">About</a>
</nav>
<main class="p-8">
  <slot />
</main>
