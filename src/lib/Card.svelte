<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let color: string;
  export let title: string;
  export let value: string;
  export let cardClass: string = '';
</script>

<div class="bg-[#f4f4f4] p-6 rounded-lg border border-gray-200 flex items-center h-full {cardClass}">
  <div class="text-white p-3 rounded-full mr-4" class:bg-{color}-500={true}>
    <svelte:component this={icon} size={24} />
  </div>
  <div>
    <p class="text-gray-500">{title}</p>
    <p class="text-2xl font-bold">{value}</p>
  </div>
</div> 