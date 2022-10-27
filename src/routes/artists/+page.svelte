<script>
	export let data;
	console.log(data.artists[0].meta.images[0]);
	console.log(data.artists);
	// const image = data.meta.images;
	// console.log(image);
</script>

<svelte:head>
	<title>Arts in Ely | Artists</title>
</svelte:head>

<div class="artist-list">
	{#each data.artists as artist}
		{#each artist.meta.images as image}
			<img src={image} width="50px" alt="thumb" />
		{/each}
		<div class="artist-link">
			<a href={artist.path.replace('.md', '')}>{artist.meta.title}</a>
			<div class="tag-box">
				{#each artist.meta.tags as tag}
					<a href="/artists/tag/{tag}">#{tag}</a>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.artist-list {
		display: flex;
		flex-direction: column;
	}
	.artist-link {
		margin: 1rem 0;
		padding: 1rem;
		background-color: lightskyblue;
	}

	.tag-box {
		font-size: 0.75rem;
		padding: 0.5rem 0;
	}

	.tag-box a {
		margin: 1rem 0.5rem;
		padding: 0.25rem;
		background-color: #3bb3fe;
		color: #fff;
	}
</style>
