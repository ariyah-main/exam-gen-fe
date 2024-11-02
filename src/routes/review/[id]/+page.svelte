<script>
	import ExamTile from "../../../components/exam-tile.svelte";
	import papers from "../../../data/exams";
    import AttemptAccordion from "../../../components/attempt-accordion.svelte";
    
    let exam = papers[0]

</script>

<div class="mx-auto max-w-[1024px] w-[85%] h-screen ">
    <div class="flex justify-between items-center my-5">
        <h1 class="font-bold text-xl ">{exam.name}</h1>
    
        <button class="text-sm bg-gray-500 p-2 h-fit text-white rounded-lg">
			<p>Start test</p>
		</button>
    </div>

    <div class="flex flex-col space-y-8 mt-8 w-full">

		{#each papers as paper}
			<AttemptAccordion paper={paper} />
		{/each}	
	</div>
</div>

<style>
</style>
