export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const res = await fetch('/api/artists');
	const allArtists = await res.json();

	const artists = allArtists.filter((artist) => artist.meta.tags.includes(tag));

	return {
		tag,
		artists
	};
};
