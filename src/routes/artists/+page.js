export const load = async ({ fetch }) => {
	const res = await fetch('/api/artists');
	const artists = await res.json();

	return {
		artists
	};
};
