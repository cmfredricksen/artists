<script>
	export let data;
	const { title, email, website, phone, tags, images, Content } = data;
</script>

<svelte:head>
	<title>Arts in Ely | {title}</title>
</svelte:head>

<h1>{title}</h1>

<div class="contact-info">
	<p>Phone: {phone}</p>
	<p>Email: <a href="mailto:{email}">{email}</a></p>
	<p>Website: <a href={website}>{title}</a></p>
</div>

<div class="tag-box">
	{#each tags as tag}
		<a href="/artists/tag/{tag}">#{tag}</a>
	{/each}
</div>

{#each images as image}
	<img src={image} alt="pic" />
{/each}

<div class="text-box">
	<Content />
</div>

<style>
	.contact-info {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
		justify-content: space-between;
		padding: 1rem 0;
	}

	.contact-info p {
		font-weight: bold;
		color: #3bb3fe;
		margin: 0.5rem 0;
	}

	.text-box {
		width: 50%;
	}

	img {
		max-width: 500px;
		padding: 2rem 0;
	}
</style>
