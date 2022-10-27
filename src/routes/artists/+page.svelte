<script>
	export let data;
</script>

<svelte:head>
	<title>Cooking with Fred &hearts; Recipes</title>
</svelte:head>

<div class="recipe-list">
	{#each data.artists as artist}
		<div class="recipe-link">
			<a href={artist.path.replace('.md', '')}>{artist.meta.title}</a>
			<div class="tag-box">
				{#each artist.meta.tags as tag}
					<a href="/artists/tag/{tag}">#{tag}</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
