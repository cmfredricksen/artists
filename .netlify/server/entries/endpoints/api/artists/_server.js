import { j as json } from "../../../../chunks/index2.js";
const fetchArtists = async () => {
  const allArtists = /* @__PURE__ */ Object.assign({ "/src/routes/artists/artistFiles/cecilia-rolando.md": () => import("../../../../chunks/cecilia-rolando.js"), "/src/routes/artists/artistFiles/chris-fredricksen.md": () => import("../../../../chunks/chris-fredricksen.js"), "/src/routes/artists/artistFiles/claude-monet.md": () => import("../../../../chunks/claude-monet.js"), "/src/routes/artists/artistFiles/edouard-manet.md": () => import("../../../../chunks/edouard-manet.js"), "/src/routes/artists/artistFiles/frieda-kahlo.md": () => import("../../../../chunks/frieda-kahlo.js"), "/src/routes/artists/artistFiles/mary-cassett.md": () => import("../../../../chunks/mary-cassett.js"), "/src/routes/artists/artistFiles/wassily-kandinski.md": () => import("../../../../chunks/wassily-kandinski.js") });
  const iterableArtists = Object.entries(allArtists);
  const artists = await Promise.all(
    iterableArtists.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const artistPath = path.replace("/src/routes/artists/artistFiles", "/artists");
      return {
        meta: metadata,
        path: artistPath
      };
    })
  );
  return artists;
};
const GET = async () => {
  const artists = await fetchArtists();
  return json(artists);
};
export {
  GET
};
