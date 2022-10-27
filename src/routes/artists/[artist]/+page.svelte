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

{#each tags as tag}
	<p>#{tag}</p>
{/each}

{#each images as image}
	<img src={image} alt="pic" />
{/each}

<Content />
