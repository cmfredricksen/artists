import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".artist-list.svelte-1ofw5x1{display:flex;flex-direction:column;justify-content:space-between}.artist-box.svelte-1ofw5x1{display:grid;align-items:center;grid-template-columns:1fr 3fr 1fr;padding:1rem 0}.artist-link.svelte-1ofw5x1{margin:1rem 0;padding:1rem;background-color:lightskyblue}.img-box.svelte-1ofw5x1{margin:0;padding:0;justify-self:flex-end}img.svelte-1ofw5x1{max-width:100px;margin:0 1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xxky0f_START -->${$$result.title = `<title>Arts in Ely | Artists</title>`, ""}<!-- HEAD_svelte-xxky0f_END -->`, ""}

<div class="${"artist-list svelte-1ofw5x1"}">${each(data.artists, (artist) => {
    return `<div class="${"artist-box svelte-1ofw5x1"}"><div class="${"img-box svelte-1ofw5x1"}">${each(artist.meta.images, (image) => {
      return `<img${add_attribute("src", image, 0)} alt="${"thumb"}" class="${"svelte-1ofw5x1"}">`;
    })}</div>
			<div class="${"artist-link svelte-1ofw5x1"}"><a${add_attribute("href", artist.path.replace(".md", ""), 0)}>${escape(artist.meta.title)}</a>
				<div class="${"tag-box"}">${each(artist.meta.tags, (tag) => {
      return `<a href="${"/artists/tag/" + escape(tag, true)}">#${escape(tag)}</a>`;
    })}
				</div></div>
		</div>`;
  })}
</div>`;
});
export {
  Page as default
};
