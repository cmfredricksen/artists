<script>
	export let data;
	const { meta, artists } = data;
</script>

<h1>#{data.tag}</h1>

<ul>
	{#each artists as artist}
		<li>
			<a href={artist.path.replace('.md', '')}>{artist.meta.title}</a>
		</li>
	{/each}
</ul>
