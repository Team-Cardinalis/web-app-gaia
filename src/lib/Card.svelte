<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType | undefined = undefined;
  export let color: string;
  export let title: string;
  export let value: string;
  export let cardClass: string = '';
  export let iconSrc: string | undefined = undefined;
  
  // Détecter si c'est une icône soleil/lune pour retirer le fond
  $: isSunMoonIcon = iconSrc && (iconSrc.includes('sun.svg') || iconSrc.includes('moon.svg'));
</script>

<div class="bg-white p-6 rounded-lg border border-gray-200 flex items-center h-full {cardClass}">
  <div class="text-white p-3 rounded-full mr-4" style="background-color: {isSunMoonIcon ? 'transparent' : (color === 'yellow' ? '#eab308' : color === 'blue' ? '#3b82f6' : color === 'red' ? '#ef4444' : color === 'orange' ? '#f97316' : '#6b7280')}">
    {#if icon}
      <svelte:component this={icon} size={24} />
    {:else if iconSrc}
      <img src={iconSrc} alt="icon" class="w-24 h-24" />
    {/if}
  </div>
  <div>
    <p class="text-gray-500">{title}</p>
    <p class="text-2xl font-bold">{value}</p>
  </div>
</div> 