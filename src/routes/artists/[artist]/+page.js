export async function load({ params }) {
	const artist = await import(`../artistFiles/${params.artist}.md`);
	const { title, email, tags, website, phone, images } = artist.metadata;
	const Content = artist.default;

	return {
		title,
		images,
		email,
		phone,
		website,
		tags,
		Content
	};
}
