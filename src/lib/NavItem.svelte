<script lang="ts">
  export let href: string;
  export let imgSrc: string;
  export let alt: string;
  export let active: boolean = false;
</script>

<li
  class="flex flex-1 justify-center rounded-md hover:bg-[#f4f4f4] transition-all duration-300 md:w-16 md:flex-none md:mx-2 {active ? 'bg-[#f4f4f4]' : ''} {href === '/settings' ? 'md:mt-auto md:mb-2' : (href === '/' ? 'md:mt-2' : '')}"
>
  <a
    {href}
    class="flex items-center h-14 w-14 justify-center"
  >
    <img src={imgSrc} {alt} class="w-6 h-6 flex-shrink-0" />
  </a>
</li> 