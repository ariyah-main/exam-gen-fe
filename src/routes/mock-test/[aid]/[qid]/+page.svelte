<script lang="ts">
	import papers from '../../../../data/exams';
	import AttemptAccordion from '../../../../components/attempt-accordion.svelte';
	import mock_questions from '../../../../data/mock_questions';
	import { page } from '$app/stores';
	let exam = papers[0];
	let question = mock_questions[0];

	const answers = [...question.incorrect_answers, ...question.correct_answers];
</script>

<div class="mx-auto max-w-[1024px] w-[85%] h-screen">
	<div class="flex justify-between items-center my-5">
		<h1 class="font-bold">{exam.name}</h1>

		<div class="flex space-x-3 font-bold">
			<button class="text-sm h-fit rounded-lg">
				<p>Pause</p>
			</button>
			<button class="text-sm h-fit rounded-lg">
				<p>Finish</p>
			</button>
		</div>
	</div>

	<div class="flex flex-col space-y-8 mt-8 w-full">
		<p>Question {$page.params.qid}:</p>
		<p>{question.text}</p>
		<fieldset>
			{#each answers as answer, i}
				<button class=" w-full text-left p-1 my-1">
					<input id={i.toString()} type="checkbox" />
					<label for={i.toString()}>{answer.text}</label>
				</button>
			{/each}
		</fieldset>
	</div>
</div>

<style>
</style>
