<script lang="ts">
  import { Flame, Users as HumansIcon, BarChart2, ShoppingCart, Briefcase, Users } from 'lucide-svelte';
  import Card from '$lib/Card.svelte';
  import { t } from '$lib/translations';
  import { get } from 'svelte/store';
  const translate = get(t);
</script>

<h1 class="text-3xl font-bold mb-6 mt-6">{translate('dashboard.title')}</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <Card icon={Users} color="blue" title={translate('dashboard.totalUsers')} value="1,234" />
  <Card icon={BarChart2} color="green" title={translate('dashboard.sales')} value="$56,789" />
  <Card icon={ShoppingCart} color="yellow" title={translate('dashboard.newOrders')} value="42" />
  <Card icon={Briefcase} color="purple" title={translate('dashboard.activeProjects')} value="12" />
  <Card icon={Flame} color="red" title={translate('dashboard.fireDetected')} value="3" />
  <Card icon={HumansIcon} color="orange" title={translate('dashboard.humansDetected')} value="15" />
</div>
