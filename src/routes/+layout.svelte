<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/ed03d16698.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="app h-screen w-full">
	<main class="w-full">
		<Navbar />
		<slot />
	</main>

	<footer></footer>
</div>

<style lang="postcss">
	:global(body) {
		box-sizing: border-box;
	}
</style>
