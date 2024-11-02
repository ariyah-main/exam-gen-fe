<script>
    import ArrowDown from "../icons/arrow-down.svelte";
    import ArrowUp from "../icons/arrow-up.svelte";

    export let paper
    
    let open = false;

</script>
<button class=" bg-gray-100 hover:shadow-xl w-full flex justify-between items-center space-y-4 p-2">
    
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <details class="w-full" >
        <summary on:click={()=> open = !open} on:keypress={()=>{}} class="h-[100px] grid grid-cols-4 w-full items-center ">
            <div class="flex justify-center">
                <div class="h-[50px] w-[50px] bg-gray-200"></div>
            </div>

            <div class="inline">
                <p>Passed!!</p>
                <p>xx-xx-xx</p>
            </div>

            <p>{58}%</p>

            <div class="flex justify-center">
                {#if open}
                    <ArrowUp size={"w-[20px] h-[20px]"} />
                {:else}
                    <ArrowDown size={"w-[20px] h-[20px]"} />
                {/if}
            </div>

        </summary>

        <div class="w-full text-left p-2">
            
            <div class="flex w-full justify-center my-4">
                <button class="px-8 py-2 border-2 border-black">
                    Review questions
                </button>
            </div>
            <p class=" font-bold py-4">Domains</p>
            {#each paper.domains as domain }
                <p class="font-semibold text-sm">{domain.name}</p>
            {/each}
          
        </div>
    </details>
      

</button>