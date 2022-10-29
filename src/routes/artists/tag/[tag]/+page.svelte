<script>
	export let data;
	console.log(data);
	const { meta, artists } = data;
</script>

<svelte:head>
	<title>Artists | {data.tag}</title>
</svelte:head>

<h1>{data.tag}</h1>

<ul>
	{#each artists as artist}
		<li>
			<img src={artist.meta.images[0]} alt="" />
			<a href={artist.path.replace('.md', '')}>{artist.meta.title}</a>
		</li>
	{/each}
</ul>

<style>
	h1 {
		padding: 0 0 2rem;
	}
	img {
		width: 50px;
	}

	li {
		list-style: none;
		align-items: center;
		justify-content: center;
	}
</style>
