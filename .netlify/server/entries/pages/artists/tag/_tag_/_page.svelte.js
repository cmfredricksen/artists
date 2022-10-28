import { c as create_ssr_component, d as escape, e as each, b as add_attribute } from "../../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-156wl60{width:50px}li.svelte-156wl60{list-style:none;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  const { meta, artists } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1>#${escape(data.tag)}</h1>

<ul>${each(artists, (artist) => {
    return `<li class="${"svelte-156wl60"}"><img${add_attribute("src", artist.meta.images[0], 0)} alt="${""}" class="${"svelte-156wl60"}">
			<a${add_attribute("href", artist.path.replace(".md", ""), 0)}>${escape(artist.meta.title)}</a>
		</li>`;
  })}
</ul>`;
});
export {
  Page as default
};
