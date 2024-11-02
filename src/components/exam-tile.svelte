<script>
    export let paper

</script>
<button class="h-[100px] bg-gray-100 hover:shadow-xl w-full flex justify-between items-center space-y-4 p-4">
    <div class="">
        {#if paper.logo }
            <!-- <img src={paper.logo.src} alt={paper.logo.alt} /> -->
        {:else}
            <p class="text-sm">{paper.name}</p>
        {/if}
    </div>

</button>