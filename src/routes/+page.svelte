<script lang="ts">
  import { Flame, Users as HumansIcon, Users } from 'lucide-svelte';
  import Card from '$lib/Card.svelte';
  import { t } from '$lib/translations';
  import { get } from 'svelte/store';
  const translate = get(t);
  import { onMount } from 'svelte';
  let isDay = true;
  onMount(() => {
    const hour = new Date().getHours();
    isDay = hour >= 6 && hour < 18;
  });
</script>

<div class="flex flex-col h-full">
  <h1 class="text-3xl font-semibold mb-6 mt-6 shrink-0">{translate('dashboard.title')}</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 auto-rows-fr grid-flow-dense lg:auto-rows-fr">
    <Card iconSrc={isDay ? '/sun.svg' : '/moon.svg'} color="yellow" title={translate(isDay ? 'dashboard.greeting_day' : 'dashboard.greeting_night')} value="" cardClass="lg:col-span-4 lg:row-span-1" />
    <Card icon={Users} color="blue" title={translate('dashboard.totalUsers')} value="1,234" cardClass="lg:col-span-2 lg:row-span-2" />
    <Card icon={Flame} color="red" title={translate('dashboard.fireDetected')} value="3" cardClass="lg:col-span-2 lg:row-span-1" />
    <Card icon={HumansIcon} color="orange" title={translate('dashboard.humansDetected')} value="15" cardClass="lg:col-span-2 lg:row-span-1" />
  </div>
</div>
