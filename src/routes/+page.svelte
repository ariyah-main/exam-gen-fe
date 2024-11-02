<script>
	import ExamTile from "../components/exam-tile.svelte";
	import papers from "../data/exams";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="AWS exam papers" />
</svelte:head>

<div class="mx-auto max-w-[1024px] w-[85%] h-screen ">

	<h1 class="font-bold text-2xl mt-4">My Practice Papers</h1>

	<div class="flex flex-col space-y-4 mt-4">

		{#each papers as paper}
			<ExamTile paper={paper} />
		{/each}	
	</div>

	<div class="w-full flex justify-center mt-[50px]">
		<button class="text-sm bg-gray-500 p-2 text-white rounded-lg">
			<p>More Papers</p>
		</button>
	</div>


</div>

<style>
</style>
