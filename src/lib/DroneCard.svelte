<script lang="ts">
  import { Battery, Activity, Navigation, Wind } from 'lucide-svelte';
  import { t } from '$lib/translations/index';
  export let name: string;
  export let battery: number;
  export let status: string;
  export let altitude: number;
  export let speed: number;
</script>

<div class="bg-white p-6 rounded-lg border border-gray-200">
  <h2 class="text-xl font-semibold mb-4">{name}</h2>
  <div class="space-y-3">
    <div class="flex items-center">
      <Battery class="mr-2 text-blue-500" size={20} />
      <div class="w-full">
        <p class="text-sm text-gray-600">{$t('equipments.battery')}: {battery}%</p>
        <div class="bg-gray-200 rounded-full h-2.5">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: {battery}%"></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <Activity class="mr-2 {status === 'Actif' || status === 'En vol' ? 'text-green-500' : 'text-red-500'}" size={20} />
      <p class="text-sm text-gray-600">{$t('equipments.status')}: <span class="{status === 'Actif' || status === 'En vol' ? 'text-green-600' : 'text-red-600'}">{status}</span></p>
    </div>
    <div class="flex items-center">
      <Navigation class="mr-2 text-purple-500" size={20} />
      <p class="text-sm text-gray-600">{$t('equipments.altitude')}: {altitude} m</p>
    </div>
    <div class="flex items-center">
      <Wind class="mr-2 text-indigo-500" size={20} />
      <p class="text-sm text-gray-600">{$t('equipments.speed')}: {speed} km/h</p>
    </div>
  </div>
</div> 