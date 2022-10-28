<script>
	const links = [
		{
			title: 'Home',
			path: 'https://artsinely.org/'
		},
		{
			title: 'Directory',
			path: 'https://artsinely.org/arts-directory/'
		},
		{
			title: 'API',
			path: '/api/artists'
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
