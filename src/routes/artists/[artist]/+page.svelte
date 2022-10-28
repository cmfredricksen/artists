<script>
	export let data;
	const { title, email, website, phone, tags, images, Content } = data;
</script>

<svelte:head>
	<title>Arts in Ely | {title}</title>
</svelte:head>

<h1>{title}</h1>
<p>{phone}</p>
<a href="mailto:{email}">email</a>
<a href={website}>{website}</a>

<div class="tag-box">
	{#each tags as tag}
		<a href="/artists/tag/{tag}">#{tag}</a>
	{/each}
</div>

{#each images as image}
	<img src={image} alt="pic" />
{/each}

<Content />
