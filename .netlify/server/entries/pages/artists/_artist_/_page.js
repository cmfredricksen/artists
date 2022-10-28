const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const artist = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../artistFiles/cecilia-rolando.md": () => import("../../../../chunks/cecilia-rolando.js"), "../artistFiles/chris-fredricksen.md": () => import("../../../../chunks/chris-fredricksen.js"), "../artistFiles/claude-monet.md": () => import("../../../../chunks/claude-monet.js"), "../artistFiles/edouard-manet.md": () => import("../../../../chunks/edouard-manet.js"), "../artistFiles/frieda-kahlo.md": () => import("../../../../chunks/frieda-kahlo.js"), "../artistFiles/mary-cassett.md": () => import("../../../../chunks/mary-cassett.js"), "../artistFiles/wassily-kandinski.md": () => import("../../../../chunks/wassily-kandinski.js") }), `../artistFiles/${params.artist}.md`);
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
export {
  load
};
