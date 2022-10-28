<script>
	export let data;
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
</style>
