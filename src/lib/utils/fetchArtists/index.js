export const fetchArtists = async () => {
	const allArtists = import.meta.glob('/src/routes/artists/artistFiles/*.md');
	const iterableArtists = Object.entries(allArtists);

	const artists = await Promise.all(
		iterableArtists.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const artistPath = path.replace('/src/routes/artists/artistFiles', '/artists');

			return {
				meta: metadata,
				path: artistPath
			};
		})
	);
	return artists;
};
