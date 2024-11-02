<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="AWS exam papers" />
</svelte:head>

<section class="pt-8">
	<h2>Generate practice questions</h2>

	<form>
		<!-- Drop down input for choosing the exam -->
		<input type="text" name="exam" id="exam" placeholder="choose an exam" />

		<!-- Radio button input for exam topics -->
		<input type="text" name="type" id="type" placeholder="topic --- full" />

		<!-- Choose topics component -->
		<div>
			<input type="text" name="topic" id="topic" placeholder="Choose a topic" />
			<input type="number" name="length" id="length" placeholder="choose 10, 30, 5" />
		</div>

		<!-- Section with dynamically updating price updating price -->
		<div>
			<p>Price:</p>
			<p>$2.00</p>
		</div>

		<!-- hopefully model is cheap enough to  -->
		<button type="submit">Preview questions</button>
	</form>

	<p>Or choose one of practice papers from our catalogue</p>

	<!-- Drop down input for choosing the exam -->
	<input type="text" name="exam" id="exam" placeholder="choose an exam" />

	<p>List of papers based on the parameters</p>
</section>

<style>
</style>
