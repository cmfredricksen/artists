<script>
	export let data;
</script>

<svelte:head>
	<title>Arts in Ely | Artists</title>
</svelte:head>

<div class="artist-list">
	{#each data.artists as artist}
		<div class="artist-box">
			<div class="img-box">
				{#each artist.meta.images as image}
					<img src={image} alt="thumb" />
				{/each}
			</div>
			<div class="artist-link">
				<a href={artist.path.replace('.md', '')}>{artist.meta.title}</a>
				<div class="tag-box">
					{#each artist.meta.tags as tag}
						<a href="/artists/tag/{tag}">#{tag}</a>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.artist-list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.artist-box {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 3fr 1fr;
		padding: 1rem 0;
	}
	.artist-link {
		margin: 1rem 0;
		padding: 1rem;
		background-color: lightskyblue;
	}

	.img-box {
		margin: 0;
		padding: 0;
		justify-self: flex-end;
	}

	img {
		max-width: 100px;
		margin: 0 1rem;
	}
</style>
