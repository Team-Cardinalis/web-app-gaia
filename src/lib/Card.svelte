<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType | undefined = undefined;
  export let color: string;
  export let title: string;
  export let value: string;
  export let cardClass: string = '';
  export let iconSrc: string | undefined = undefined;
</script>

<div class="bg-[#f4f4f4] p-6 rounded-lg border border-gray-200 flex items-center h-full {cardClass}">
  <div class="text-white p-3 rounded-full mr-4" class:bg-{color}-500={true}>
    {#if icon}
      <svelte:component this={icon} size={24} />
    {:else if iconSrc}
      <img src={iconSrc} alt="icon" class="w-6 h-6" />
    {/if}
  </div>
  <div>
    <p class="text-gray-500">{title}</p>
    <p class="text-2xl font-bold">{value}</p>
  </div>
</div> 