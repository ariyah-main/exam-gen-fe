<script lang="ts">
	import Hamburger from "../icons/hamburger.svelte";

	let show_menu = false;


</script>

<header class="h-[80px] w-full border-b-2  ">
	<div class="mx-auto h-full w-full max-w-[85%] flex justify-between items-center">
		<div class="flex items-center">
			<i class="fa-solid fa-bars text-[24px] pr-4"></i>
			<!-- Logo -->
			<div class="h-[36px] w-[36px] rounded-md bg-slate-700 mr-1"></div>
			<p class="font-extrabold text-lg">Cert.io</p>
			<!-- Logo -->
		</div>
	
		<button class="flex w-fit relative" on:click={() => show_menu = !show_menu}>
			<div>
				<Hamburger size={"w-5 h-5"}/>
				{#if show_menu}
					<div class="absolute left-[-120px] bg-white flex flex-col p-4 space-y-2 text-left">
						<p class="text-base font-bold text-[#4b4b4b]">Exam Papers</p>
						<p class="text-base font-bold text-[#4b4b4b]">Speed Tester</p>
						<p class="text-base font-bold text-[#4b4b4b]">Sign Up</p>
					</div>
				{/if}
				
			</div>
		</button>
	</div>
</header>
