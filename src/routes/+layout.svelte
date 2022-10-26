<script>
	import '../global.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Header />

<div class="wrapper">
	<slot />
</div>

<Footer />

<style>
	.wrapper {
		width: 80%;
		padding: 2rem 0;
		margin: 0 auto;
	}
</style>
