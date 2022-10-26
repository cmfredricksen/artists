<script>
	const links = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Directory',
			path: '/'
		},
		{
			title: 'Donate',
			path: '/'
		},
		{
			title: 'Artists',
			path: '/artists'
		}
	];
</script>

<nav>
	{#each links as { title, path }}
		<a href={path}>{title}</a>
	{/each}
</nav>

<style>
	a {
		margin: 0 1rem;
	}
</style>
