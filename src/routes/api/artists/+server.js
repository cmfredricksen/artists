import { fetchArtists } from '$lib/utils/fetchArtists';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const artists = await fetchArtists();

	return json(artists);
};
